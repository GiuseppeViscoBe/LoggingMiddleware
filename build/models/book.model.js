"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    author: { type: String }
});
const Book = (0, mongoose_1.model)('Book', BookSchema);
exports.default = Book;
