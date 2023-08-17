import express from "express";
import {
  httpGetContentEn,
  httpGetContentRu,
  httpGetContentHb,
} from "./content.controller";

const contentRouter = express.Router();

contentRouter.get(`/content/language=en`, httpGetContentEn);
contentRouter.get(`/content/language=ru`, httpGetContentRu);
contentRouter.get(`/content/language=hb`, httpGetContentHb);

export { contentRouter };
