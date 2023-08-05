"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const createReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        book: zod_1.z.string(),
        ratings: zod_1.z.number(),
        comment: zod_1.z.string()
    })
});
const updateReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ratings: zod_1.z.number(),
        comment: zod_1.z.string()
    })
});
exports.ReviewValidation = {
    createReviewZodSchema,
    updateReviewZodSchema
};
