"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_router_1 = __importDefault(require("../routers/books.router"));
const logging_middleware_1 = require("../middlewares/logging.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(logging_middleware_1.loggingMiddleware);
app.use('/api', books_router_1.default);
exports.default = app;
