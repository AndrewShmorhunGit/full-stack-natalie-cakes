"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuRouter = void 0;
const express_1 = __importDefault(require("express"));
const menu_controller_1 = require("./menu.controller");
const menuRouter = express_1.default.Router();
exports.menuRouter = menuRouter;
menuRouter.get("/menu/params", menu_controller_1.menuController.getMenuParams);
