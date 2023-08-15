import morgan from "morgan";
import express, { Express } from "express";
import cors from "cors";

import { contentsRouter } from "./routes/contents/contents.router";
import path from "path";

export const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(contentsRouter);

app.get("/", (_request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
