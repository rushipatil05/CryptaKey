import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.log("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Optional: exits the app on failure
  }
};

export default connectToMongoDB;
