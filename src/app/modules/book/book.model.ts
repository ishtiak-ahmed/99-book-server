import { Schema, model } from 'mongoose';
import { IBook } from './book.interface';
import { GenreArray, StatusArray } from './book.constant';

const bookSchema = new Schema<IBook>(
  {
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
      enum: GenreArray,
    },
    status: {
      type: String,
      required: true,
      enum: StatusArray,
    },
    ISBN: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Book = model<IBook>('Book', bookSchema);