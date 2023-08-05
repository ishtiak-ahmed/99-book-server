"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const book_constant_1 = require("./book.constant");
const createBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        author: zod_1.z.string({
            required_error: 'Author is required',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'Publication date is required',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required',
        }),
        genre: zod_1.z.enum([...book_constant_1.GenreArray], {
            required_error: 'Genre is needed',
        }),
        status: zod_1.z.enum([...book_constant_1.StatusArray], {
            required_error: 'Status is needed',
        }),
        ISBN: zod_1.z.string({
            required_error: 'ISBN is required',
        }),
    }),
});
const updateBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        publicationDate: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        genre: zod_1.z.enum([...book_constant_1.GenreArray]).optional(),
        status: zod_1.z.enum([...book_constant_1.StatusArray]).optional(),
        ISBN: zod_1.z.string().optional(),
    }),
});
exports.BookValidation = {
    createBookZodSchema,
    updateBookZodSchema,
};
