import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectdb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://99Gssabek:1999Ghassan@cluster0.ydo00ig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    
    
    // Handle connection errors after initial connection
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    return conn;
  } catch (error) {
    console.error(`MongoDB Consfsd nection Error: ${error}`);
    process.exit(1);
  }
};

export default connectdb;

