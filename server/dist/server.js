"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const app_1 = require("./app");
dotenv_1.default.config();
const port = process.env.PORT || 8080;
const server = http_1.default.createServer(app_1.app);
server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
