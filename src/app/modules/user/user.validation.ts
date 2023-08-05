import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    phoneNumber: z.string(),
    email: z.string({required_error: 'Email is required.'}),
    password: z.string(),
    name: z.object({
      firstName: z.string({ required_error: 'First name is required' }),
      lastName: z.string({ required_error: 'Last name is required' }),
    }),
    address: z.string(),
  })
})

const updateUserZodSchema = z.object({
  body: z.object({
    _id: z.string().optional(),
    phoneNumber: z.string().optional(),
    password: z.string().optional(),
    name: z.object({
      firstName: z.string({ required_error: 'First name is required' }),
      lastName: z.string({ required_error: 'Last name is required' }),
    }).optional(),
    address: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
})

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema
};
