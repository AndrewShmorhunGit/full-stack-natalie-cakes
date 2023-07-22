"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentsRouter = void 0;
const express_1 = __importDefault(require("express"));
const contents_controller_1 = require("./contents.controller");
const contentsRouter = express_1.default.Router();
exports.contentsRouter = contentsRouter;
contentsRouter.get("/contents", contents_controller_1.contentsController.getAllContents);
contentsRouter.get(`/contents/language=en`, contents_controller_1.contentsController.getEnContent);
contentsRouter.get(`/contents/language=ru`, contents_controller_1.contentsController.getRuContent);
contentsRouter.get(`/contents/language=hb`, contents_controller_1.contentsController.getHbContent);
