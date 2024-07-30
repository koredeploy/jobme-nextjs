import connectMongoDB from "../../../../lib/mongodb";
import Jobs from "../../../../models/Jobs";

export default async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'GET') {
        try {
            await connectMongoDB();
            
            const job = await Jobs.findById(id);
            
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }

            res.status(200).json({ message: 'Job retrieved successfully', data: job });
        } catch (error) {
            res.status(500).json({ 
                message: 'Internal Server Error', 
                error: process.env.NODE_ENV === 'development' ? error.message : undefined 
            });
        }
    } else if (req.method === 'PUT' || req.method === 'PATCH') {
        try {
            await connectMongoDB();

            const { title, company, description, employmentType, logoUrl, location, experience, salary, duties, skills, latitude, longitude } = req.body;

            // Validate required fields
            if (!title || !company || !description || !employmentType || !location || !logoUrl) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            const updatedJob = await Jobs.findByIdAndUpdate(id, {
                title,
                company,
                description,
                employmentType,
                logoUrl,
                location,
                experience,
                salary,
                duties,
                skills,
                latitude,
                longitude
            }, { new: true });

            if (!updatedJob) {
                return res.status(404).json({ message: 'Job not found' });
            }

            res.status(200).json({ message: 'Job updated successfully', data: updatedJob });
        } catch (error) {
            res.status(500).json({ 
                message: 'Internal Server Error', 
                error: process.env.NODE_ENV === 'development' ? error.message : undefined 
            });
        }
    } else {
        res.setHeader('Allow', ['GET', 'PUT', 'PATCH']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
