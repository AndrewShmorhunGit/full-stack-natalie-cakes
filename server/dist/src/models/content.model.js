"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContent = void 0;
const content_mongo_1 = __importDefault(require("./content.mongo"));
function getContent(lang) {
    return __awaiter(this, void 0, void 0, function* () {
        const exclude = lang === "en"
            ? { contentRu: 0, contentHb: 0 }
            : lang === "ru"
                ? { contentEn: 0, contentHb: 0 }
                : { contentEn: 0, contentRu: 0 };
        const excludeOption = Object.assign({ _id: 0 }, exclude);
        return yield content_mongo_1.default.findOne({}, excludeOption);
    });
}
exports.getContent = getContent;
