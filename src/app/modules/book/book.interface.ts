import { Model } from 'mongoose';

export type Genre =
  | 'Fiction'
  | 'Non-Fiction'
  | 'Mystery'
  | 'Thriller'
  | 'Romance'
  | 'Science Fiction'
  | 'Fantasy'
  | 'Biography'
  | 'Self-Help'
  | 'Adventure'
  | 'History';

export type Status = 'Available' | 'Reserved' | 'Checked Out';

export type IBook = {
  title: string;
  author: string;
  publicationDate: Date;
  creator: string,
  price: number;
  genre: Genre;
  status: Status;
  ISBN: string;
};

export type BookModel = Model<IBook>;

export type BookFilters = {
  searchTerm?: string;
  minPrice?: number;
  maxPrice?: number;
  genre?: Genre;
  status?: Status;
};
