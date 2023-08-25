"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const menuParamsSchema = new mongoose_1.default.Schema({
    menuParamsData: [
        {
            category: { type: String, required: true },
            params: {
                sizes: { type: [String], required: true },
                persons: { type: [Number], required: true },
                weight: { type: [Number], required: true },
                radius: { type: [Number], required: true },
                prices: { type: [Number], required: true },
            },
        },
    ],
});
module.exports = mongoose_1.default.model("Menu", menuParamsSchema);
