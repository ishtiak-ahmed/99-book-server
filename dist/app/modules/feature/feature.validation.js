"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureValidation = void 0;
const zod_1 = require("zod");
const feature_constant_1 = require("./feature.constant");
const createFeatureZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        book: zod_1.z.string(),
        status: zod_1.z.enum([...feature_constant_1.STATUSES]),
    })
});
const updateFeatureZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        book: zod_1.z.string(),
        status: zod_1.z.enum([...feature_constant_1.STATUSES]),
    })
});
exports.FeatureValidation = {
    createFeatureZodSchema,
    updateFeatureZodSchema
};
