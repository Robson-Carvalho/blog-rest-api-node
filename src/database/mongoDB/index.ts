import mongoose, { ConnectOptions } from "mongoose";
require("dotenv").config({
  path: process.env.NODE_ENV === "prod" ? ".env.prod" : ".env.dev",
});

interface IMongooseClient {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const URI = process.env.MONGODB_URL as string;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

export class MongooseClient implements IMongooseClient {
  async connect(): Promise<void> {
    try {
      await mongoose.connect(URI, options);
      console.log("Database connection established!");
    } catch (error) {
      console.error("Error connecting Database instance:", error);
      throw new Error("Failed to connect to database");
    }
  }
  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}
