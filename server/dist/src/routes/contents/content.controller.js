"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentsController = void 0;
const content_model_1 = require("../../models/content.model");
const contentsController = {
    // Fix that [any]
    getAllContents(req, res) {
        return res.status(200).json(content_model_1.contents);
    },
    getEnContent(req, res) {
        return res.status(200).json(content_model_1.contents.contentEn);
    },
    getRuContent(req, res) {
        return res.status(200).json(content_model_1.contents.contentRu);
    },
    getHbContent(req, res) {
        return res.status(200).json(content_model_1.contents.contentHb);
    },
};
exports.contentsController = contentsController;
