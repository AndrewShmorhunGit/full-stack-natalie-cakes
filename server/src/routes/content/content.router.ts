import express from "express";
import { contentController } from "./content.controller";

const contentRouter = express.Router();

contentRouter.get(`/content/language=en`, contentController.getEnContent);
contentRouter.get(`/content/language=ru`, contentController.getRuContent);
contentRouter.get(`/content/language=hb`, contentController.getHbContent);

export { contentRouter };
