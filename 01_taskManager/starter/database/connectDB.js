import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    if (!url) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(url);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.log("Error", error);
  }
};

export default connectDB;
