import { z } from 'zod';

const createReviewZodSchema = z.object({
  body: z.object({
    book: z.string(),
    ratings: z.number(),
    comment: z.string()
  })
})
const updateReviewZodSchema = z.object({
  body: z.object({
    ratings: z.number(),
    comment: z.string()
  })
})

export const ReviewValidation = {
  createReviewZodSchema,
  updateReviewZodSchema
};
