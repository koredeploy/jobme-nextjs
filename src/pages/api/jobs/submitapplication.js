
import multer from "multer";
import connectMongoDB from "../../../../lib/mongodb";
import JobApplication from "../../../../models/JobApplication";

import getRawBody from "raw-body";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB limit
  },
});

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === "POST") {
    try {
      await runMiddleware(req, res, upload.single("resume"));

      const {
        userId,
        jobId,
        firstName,
        lastName,
        email,
        phoneNumber,
        coverLetter,
      } = req.body;

      // Add validation
      if (
        !userId ||
        !jobId ||
        !firstName ||
        !lastName ||
        !email ||
        !phoneNumber ||
        !coverLetter ||
        !req.file
      ) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const existingApplication = await JobApplication.findOne({
        userId,
        jobId,
      });

      if (existingApplication) {
        return res
          .status(400)
          .json({ message: "You have already applied for this job" });
      }

      const newApplication = await JobApplication.create({
        userId,
        jobId,
        firstName,
        lastName,
        email,
        phoneNumber,
        coverLetter,
        resume: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
        status: 'Pending', // Set initial status
      });

      console.log("Application Submitted");

      const applicationWithResumeAndStatus = await JobApplication.findById(
        newApplication._id
      ).select("+resume +status");

      res.status(200).json({
        message: "Application submitted successfully",
        data: {
          ...applicationWithResumeAndStatus.toObject(),
          status: applicationWithResumeAndStatus.status,
        },
      });

    } catch (error) {
      console.error("Error applying for job:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "PUT") {
    try {
      const buffer = await getRawBody(req);
      const data = JSON.parse(buffer.toString());
      const { applicationId, status } = data;

      if (!applicationId || !status) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const updatedApplication = await JobApplication.findByIdAndUpdate(
        applicationId,
        { status },
        { new: true }
      ).select('-resume');

      if (!updatedApplication) {
        return res.status(404).json({ message: "Application not found" });
      }

      res.status(200).json({
        message: "Application status updated successfully",
        data: updatedApplication,
      });
    } catch (error) {
      console.error("Error updating application status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}