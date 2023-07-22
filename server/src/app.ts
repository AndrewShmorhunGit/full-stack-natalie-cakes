import express, { Express, Request, Response } from "express";
import { contentsRouter } from "./routes/contents/contents.router";
import cors from "cors";
import path from "path";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(contentsRouter);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export { app };
