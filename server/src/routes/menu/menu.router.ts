import express from "express";
import { menuController } from "./menu.controller";

const menuRouter = express.Router();

menuRouter.get("/menu/params", menuController.getMenuParams);

export { menuRouter };
