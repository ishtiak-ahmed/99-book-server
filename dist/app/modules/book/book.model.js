"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const book_constant_1 = require("./book.constant");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
        enum: book_constant_1.GenreArray,
    },
    status: {
        type: String,
        required: true,
        enum: book_constant_1.StatusArray,
    },
    ISBN: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Book = (0, mongoose_1.model)('Book', bookSchema);
