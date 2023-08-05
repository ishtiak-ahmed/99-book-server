"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneNumber: zod_1.z.string(),
        email: zod_1.z.string({ required_error: 'Email is required.' }),
        password: zod_1.z.string(),
        name: zod_1.z.object({
            firstName: zod_1.z.string({ required_error: 'First name is required' }),
            lastName: zod_1.z.string({ required_error: 'Last name is required' }),
        }),
        address: zod_1.z.string(),
    })
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        _id: zod_1.z.string().optional(),
        phoneNumber: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        name: zod_1.z.object({
            firstName: zod_1.z.string({ required_error: 'First name is required' }),
            lastName: zod_1.z.string({ required_error: 'Last name is required' }),
        }).optional(),
        address: zod_1.z.string().optional(),
        createdAt: zod_1.z.date().optional(),
        updatedAt: zod_1.z.date().optional(),
    })
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema
};
