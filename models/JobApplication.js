
import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema(
  
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jobs",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
    resume: {
      data: Buffer,
      contentType: String,
    },
    status: {
      type: String,
      enum: ['Applied', 'Pending', 'Interviewing', 'Received offer', 'Hired by employer', 'Not hired by employer', 'No longer interested'],
      default: 'Pending'
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);


JobApplicationSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.resume;
    return ret;
  }
});

export default mongoose.models.JobApplication ||
  mongoose.model("JobApplication", JobApplicationSchema);