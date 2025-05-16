import mongoose from 'mongoose';


export const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.Mongo_connection_str);
        console.log(`MongoDB connected :${conn.connection.host}`); 

    }
    catch(error){
        console.log(`Error:${error.message}`);
        process.exit(1);

    }
}