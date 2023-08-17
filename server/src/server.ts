import dotenv from "dotenv";
import http from "http";
import mongoose from "mongoose";
import { app } from "./app";
import { contentsData } from "./data/text/text.content";

dotenv.config();
const port = process.env.PORT || 8080;
const uri = process.env.MONGO_URL || "Error, check .env variables!";
const server = http.createServer(app);

mongoose.connection.once("open", () =>
  console.log("MongoDB connected successfully!")
);

mongoose.connection.once("error", (err) => console.error(err));

async function start() {
  if (uri === "Error, check .env variables!")
    console.log("env Error, check .env connection");
  await mongoose.connect(uri);

  server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

start();
