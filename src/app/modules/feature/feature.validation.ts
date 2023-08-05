import { z } from 'zod';
import { STATUSES } from './feature.constant';

const createFeatureZodSchema = z.object({
  body: z.object({
    book: z.string(),
    status: z.enum([...STATUSES as [string, ...string[]]]),
  })
})
const updateFeatureZodSchema = z.object({
  body: z.object({
    book: z.string(),
    status: z.enum([...STATUSES as [string, ...string[]]]),
  })
})

export const FeatureValidation = {
  createFeatureZodSchema,
  updateFeatureZodSchema
};
