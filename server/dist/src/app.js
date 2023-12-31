"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const menu_router_1 = require("./routes/menu/menu.router");
const content_router_1 = require("./routes/content/content.router");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
}));
exports.app.use((0, morgan_1.default)("combined"));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
exports.app.use(content_router_1.contentRouter);
exports.app.use(menu_router_1.menuRouter);
exports.app.get("/", (_request, response) => {
    response.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
});
