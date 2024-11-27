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
const express_1 = __importDefault(require("express"));
const book_model_1 = __importDefault(require("../models/book.model"));
const bookRouter = express_1.default.Router();
bookRouter.get("/books", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield book_model_1.default.find({});
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
    }
}));
bookRouter.post('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = book_model_1.default.create(body);
        res.status(200).json(body);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = bookRouter;
