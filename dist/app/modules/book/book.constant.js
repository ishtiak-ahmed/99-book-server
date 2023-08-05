"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookFilterableFields = exports.BOOK_SEARCHABLE_FIELDS = exports.StatusArray = exports.GenreArray = void 0;
exports.GenreArray = [
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
exports.StatusArray = ['Available', 'Reserved', 'Checked Out'];
exports.BOOK_SEARCHABLE_FIELDS = ['title', 'author', 'genre'];
exports.bookFilterableFields = [
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
