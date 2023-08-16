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
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
dotenv_1.default.config();
const port = process.env.PORT || 8080;
const uri = process.env.MONGO_URL || "Error, check .env variables!";
const server = http_1.default.createServer(app_1.app);
mongoose_1.default.connection.once("open", () => console.log("MongoDB connected successfully!"));
mongoose_1.default.connection.once("error", (err) => console.error(err));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        if (uri === "Error, check .env variables!")
            console.log("env Error, check .env connection");
        yield mongoose_1.default.connect(uri
        //   {
        //   useNewUrlParser: true,
        //   useFindAndModify: false,
        //   useCreateIndex: true,
        //   useUnifiedTopology: true,
        // }
        );
        server.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    });
}
start();
