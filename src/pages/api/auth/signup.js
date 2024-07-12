// // user controller

// import User from "../../../models/User";
// import connectMongoDB from "../../../lib/mongodb";
// import bcrypt from "bcryptjs"
// export default async function handler(req, res) {
//     if(req.method === "POST"){
//         const {firstname, lastname, email, password} = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10)
//          // Add validation
//          if (!firstname || !email || !password || !lastname) {
//             return res.status(400).json({ message: 'Missing required fields' });
//         }
//         try {
//             console.log("attemptiong to coonect to mongodb");
//             await connectMongoDB();
//             console.log('received data', req.body);
//             const newUser = await User.create({firstname, lastname, email, password: hashedPassword})
//             console.log("new user created", newUser);
    
//             res.status(201).json({
//                 message: "user created successfully",
//                 data: { firstname, lastname, email, password: hashedPassword},
//             })
//         } catch (error) {
//             console.error('Error details', error);
//             res.status(500).json({
//                 message: "Internal server Error",
//                 error: process.env.NODE_ENV === 'development' ? error.message : undefined
//             })
//         }
//     }else {
//         res.setHeader("Allow", ["POST"]);
//         res.status(405).end(`Method ${req.method} Not Allowed`)
    
//     }
//     }
    
// user controller 
import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcryptjs"

export default async function handler(req, res) {
console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
if(req.method === "POST"){
    const {firstname, lastname, email, password} = req.body;

    try {
        console.log("connecting to database mongodb");
        await connectMongoDB()
        console.log("mongodb connected successfully");
        // check if user exists in database
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message: 'User already exists'})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log('creating new user...');
        const newUser = await User.create({firstname, lastname, email, password: hashedPassword})
        console.log('New user created', newUser);

    res.status(201).json({
        message: "User registered successfully",
        data: { newUser},
    })
    } catch (error) {
        console.error("Error details:", error);
        res.status(500).json({
            message: "Internal server Error",
        })
    }
}else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}