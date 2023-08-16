import express from "express";
import { httpGetMenuParams } from "./menu.controller";

const menuRouter = express.Router();

menuRouter.get("/menu/params", httpGetMenuParams);

export { menuRouter };
