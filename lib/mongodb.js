// import mongoose from "mongoose"

// const connectMongoDB = async ()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.log("Error connecting to mongoDB", error);
//     }
// }

// export default connectMongoDB


import mongoose from "mongoose"

let cachedConnection = null;

const connectMongoDB = async () => {
    if (cachedConnection) {
        return cachedConnection;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // 5 seconds
            socketTimeoutMS: 45000, // 10 seconds
            family: 4 // Use IPv4, skip trying IPv6
        });
        
        console.log("Connected to MongoDB");
        cachedConnection = conn;
        return conn;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Rethrow the error so the calling function knows the connection failed
    }
}

export default connectMongoDB;





