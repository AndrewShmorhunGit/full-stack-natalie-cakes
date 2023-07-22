import express from "express";
import { contentsController } from "./contents.controller";

const contentsRouter = express.Router();

contentsRouter.get("/contents", contentsController.getAllContents);

contentsRouter.get(`/contents/language=en`, contentsController.getEnContent);
contentsRouter.get(`/contents/language=ru`, contentsController.getRuContent);
contentsRouter.get(`/contents/language=hb`, contentsController.getHbContent);

export { contentsRouter };
