import { Genre, Status } from './book.interface';

export const GenreArray: Genre[] = [
  'Fiction',
  'Non-Fiction',
  'Mystery',
  'Thriller',
  'Romance',
  'Science Fiction',
  'Fantasy',
  'Biography',
  'Self-Help',
  'History',
  'Adventure'
];

export const StatusArray: Status[] = ['Available', 'Reserved', 'Checked Out'];

export const BOOK_SEARCHABLE_FIELDS = ['title', 'author', 'genre'];

export const bookFilterableFields = [
  'searchTerm',
  'title',
  'author',
  'publicationDate',
  'price',
  'genre',
  'status',
  'ISBN',
  'minPrice',
  'maxPrice',
];
