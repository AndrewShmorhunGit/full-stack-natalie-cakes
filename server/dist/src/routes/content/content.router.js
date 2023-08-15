"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRouter = void 0;
const express_1 = __importDefault(require("express"));
const content_controller_1 = require("./content.controller");
const contentRouter = express_1.default.Router();
exports.contentRouter = contentRouter;
contentRouter.get(`/content/language=en`, content_controller_1.contentController.getEnContent);
contentRouter.get(`/content/language=ru`, content_controller_1.contentController.getRuContent);
contentRouter.get(`/content/language=hb`, content_controller_1.contentController.getHbContent);
