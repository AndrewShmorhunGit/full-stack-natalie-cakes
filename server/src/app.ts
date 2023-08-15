import morgan from "morgan";
import express, { Express } from "express";
import cors from "cors";
import path from "path";
import { menuRouter } from "./routes/menu/menu.router";
import { contentRouter } from "./routes/content/content.router";

export const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(contentRouter);
app.use(menuRouter);

app.get("/", (_request, response) => {
  response.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
