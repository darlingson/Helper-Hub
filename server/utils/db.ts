import mongoose from "mongoose";

let isConnected = false; // Track connection state

export async function connectToDatabase(): Promise<void> {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    const mongoUri: string = process.env.MONGO_URI as string
    await mongoose.connect(mongoUri);
    isConnected = true;
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}
