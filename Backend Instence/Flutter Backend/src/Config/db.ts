import mongoose from "mongoose";
import config from "./Config";


export const connectDB = async (): Promise<void> => {
  if (!config.mongoUri) {
    console.error("MongoDB URI is not defined in environment variables");
    process.exit(1);
  }

  try {
    // Mongoose connection options recommended for production
    await mongoose.connect(config.mongoUri, {
      // autoIndex: false, // Recommended in production
      // maxPoolSize: 10, // Maintain up to 10 socket connections
      // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5s
      // socketTimeoutMS: 45000, // Close sockets after 45s inactivity
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Exit process on failure
  }

  // Optional: handle connection events
  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB disconnected!");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("🔄 MongoDB reconnected!");
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
};

// Optional: close DB connection on app termination
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app termination");
  process.exit(0);
});
