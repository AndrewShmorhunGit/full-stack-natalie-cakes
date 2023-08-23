"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const stringSchema = { type: String, required: true };
const numberSchema = { type: Number, required: true };
const contentLanguageSchema = {
    // Navigation
    about: stringSchema,
    contacts: stringSchema,
    makeSweet: stringSchema,
    // Hero
    mainHeader: stringSchema,
    heroTagline: stringSchema,
    slogan: stringSchema,
    heroSelectors: {
        birthdayCake: stringSchema,
        cakesAndPies: stringSchema,
        cupCakes: stringSchema,
        gingerBread: stringSchema,
    },
    /// Info
    infoHeader: stringSchema,
    ingredients: stringSchema,
    ingredientsText: {
        h1: stringSchema,
        p1: stringSchema,
        h2: stringSchema,
        p2: stringSchema,
    },
    design: stringSchema,
    designText: {
        h1: stringSchema,
        p1: stringSchema,
        h2: stringSchema,
        p2: stringSchema,
    },
    order: stringSchema,
    orderText: {
        h1: stringSchema,
        p1: stringSchema,
        h2: stringSchema,
        p2: stringSchema,
    },
    important: stringSchema,
    importantText: {
        h1: stringSchema,
        p1: stringSchema,
        p2: stringSchema,
    },
    // Footer
    footerContacts: {
        address: stringSchema,
        phone: stringSchema,
        email: stringSchema,
    },
    footerOther: {
        contacts: stringSchema,
        question: stringSchema,
        callBack: stringSchema,
        follow: stringSchema,
        menu: stringSchema,
        cart: { type: [String], required: true },
        rights: stringSchema,
    },
    callBackBtn: stringSchema,
    //Menu
    menuTitle: stringSchema,
    menuContent: {
        type: [
            {
                category: stringSchema,
                group: stringSchema,
                items: [
                    {
                        itemName: stringSchema,
                        description: stringSchema,
                        tasteAccent: stringSchema,
                        image: stringSchema,
                        sourness: numberSchema,
                        sweetness: numberSchema,
                        variants: { type: [Number], required: true },
                    },
                ],
            },
        ],
        required: true,
    },
    sweetness: stringSchema,
    sourness: stringSchema,
    taste: stringSchema,
};
const contentSchema = new mongoose_1.default.Schema({
    contentEn: contentLanguageSchema,
    contentRu: contentLanguageSchema,
    contentHb: contentLanguageSchema,
});
module.exports = mongoose_1.default.model("Content", contentSchema);
