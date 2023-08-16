"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const menuCategoryParamsSchema = {
    sizes: { type: [String], required: true },
    persons: { type: [Number], required: true },
    weight: { type: [Number], required: true },
    radius: { type: [Number], required: true },
    prices: { type: [Number], required: true },
};
const menuParamsSchema = new mongoose_1.default.Schema({
    moussesParams: menuCategoryParamsSchema,
    biscuitParams: menuCategoryParamsSchema,
    classicParams: menuCategoryParamsSchema,
    cheesecakesParams: menuCategoryParamsSchema,
});
module.exports = mongoose_1.default.model("Menu", menuParamsSchema);
