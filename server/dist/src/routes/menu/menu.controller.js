"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuController = void 0;
const menu_model_1 = require("../../models/menu.model");
const menuController = {
    // Fix that [any]
    getMenuParams(req, res) {
        return res.status(200).json(menu_model_1.menuParams);
    },
};
exports.menuController = menuController;
