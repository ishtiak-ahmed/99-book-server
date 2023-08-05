import { z } from 'zod';
import { GenreArray, StatusArray } from './book.constant';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    publicationDate: z.string({
      required_error: 'Publication date is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    genre: z.enum([...GenreArray] as [string, ...string[]], {
      required_error: 'Genre is needed',
    }),
    status: z.enum([...StatusArray] as [string, ...string[]], {
      required_error: 'Status is needed',
    }),
    ISBN: z.string({
      required_error: 'ISBN is required',
    }),
  }),
});

const updateBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    publicationDate: z.string().optional(),
    price: z.number().optional(),
    genre: z.enum([...GenreArray] as [string, ...string[]]).optional(),
    status: z.enum([...StatusArray] as [string, ...string[]]).optional(),
    ISBN: z.string().optional(),
  }),
});

export const BookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
};
