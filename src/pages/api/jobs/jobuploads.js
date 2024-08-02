
// import connectMongoDB from '../../../../lib/mongodb';
// import Jobs from '../../../../models/Jobs';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         // Create a new job
//         const { title, company, description, employmentType, logoUrl, location, experience, salary, duties, skills, latitude, longitude } = req.body;

//         // Add validation
//         if (!title || !company || !description || !employmentType || !location ||!logoUrl) {
//             return res.status(400).json({ message: 'Missing required fields' });
//         }
        
//         try {
//             console.log('Attempting to connect to MongoDB...');
//             await connectMongoDB()
//             console.log('MongoDB connected successfully');
//             console.log('Attempting to create new job...');
//             console.log('Received data:', req.body);
//             const newJob = await Jobs.create({
//                 title,
//                 company,
//                 description,
//                 employmentType,
//                 logoUrl,
//                 location,
//                 experience,
//                 salary,
//                 duties,
//                 skills,
//                 latitude,
//                 longitude
//             });
//             console.log('New job created:', newJob);

//             res.status(201).json({ message: 'Job created successfully', data: newJob });
//         } catch (error) {
//             console.error('Error details:', error);
//             res.status(500).json({ 
//                 message: 'Internal Server Error', 
//                 error: process.env.NODE_ENV === 'development' ? error.message : undefined 
//             });
//         }
//     } else if (req.method === 'GET') {
//         // Retrieve jobs
//         try {
//             console.log('Attempting to connect to MongoDB...');
//             await connectMongoDB();
//             console.log('MongoDB connected successfully');

//             console.log('Retrieving jobs...');
//             const jobs = await Jobs.find({});
//             console.log(`Retrieved ${jobs.length} jobs`);

//             res.status(200).json({ message: 'Jobs retrieved successfully', data: jobs });
//         } catch (error) {
//             console.error('Error details:', error);
//             res.status(500).json({ 
//                 message: 'Internal Server Error', 
//                 error: process.env.NODE_ENV === 'development' ? error.message : undefined 
//             });
//         }
//     } else {
//         res.setHeader('Allow', ['POST', 'GET']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }






import connectMongoDB from '../../../../lib/mongodb';
import Jobs from '../../../../models/Jobs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // ... (keep your existing POST logic)
        const { title, company, description, subTitle, employmentType, logoUrl, location, experience, salary, industry, duties, skills, latitude, longitude } = req.body;

        // Add validation
        if (!title || !company || !description || !subTitle || !employmentType || !location ||!logoUrl) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        
        try {
            console.log('Attempting to connect to MongoDB...');
            await connectMongoDB()
            console.log('MongoDB connected successfully');
            console.log('Attempting to create new job...');
            console.log('Received data:', req.body);
            const newJob = await Jobs.create({
                title,
                company,
                description,
                subTitle,
                employmentType,
                logoUrl,
                location,
                experience,
                salary,
                duties,
                skills,
                latitude,
                longitude,
                industry,
            });
            console.log('New job created:', newJob);

            res.status(201).json({ message: 'Job created successfully', data: newJob });
        } catch (error) {
            console.error('Error details:', error);
            res.status(500).json({ 
                message: 'Internal Server Error', 
                error: process.env.NODE_ENV === 'development' ? error.message : undefined 
            });
        }
    } else if (req.method === 'GET') {
        try {
            console.log('Attempting to connect to MongoDB...');
            await connectMongoDB();
            console.log('MongoDB connected successfully');

            console.log('Retrieving jobs...');
            const allJobs = await Jobs.find({})
            .sort({ createdAt: -1 })
            console.log(`Retrieved ${allJobs.length} jobs`);

            // Get recent jobs (latest 6)
            const recentJobs = await Jobs.find({})
                .sort({ createdAt: -1 }) // Sort by creation date, newest first
                .limit(6);
            console.log(`Retrieved ${recentJobs.length} recent jobs`);

            res.status(200).json({ 
                message: 'Jobs retrieved successfully', 
                data: {
                    allJobs: allJobs,
                    recentJobs: recentJobs
                }
            });
        } catch (error) {
            console.error('Error details:', error);
            res.status(500).json({ 
                message: 'Internal Server Error', 
                error: process.env.NODE_ENV === 'development' ? error.message : undefined 
            });
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}