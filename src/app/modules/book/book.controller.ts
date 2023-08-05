import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { BookService } from './book.service';
import { IBook } from './book.interface';
import { bookFilterableFields } from './book.constant';
import { TokenUser } from '../../../enums/user';
import ApiError from '../../../errors/ApiError';
import { AuthenticatedRequest } from '../review/review.controller';

const createBook = catchAsync(async (req: AuthenticatedRequest, res: Response) => {
  const { ...bookData } = req.body;
  const creator = "user" in req ? (req.user as TokenUser).userId : "";
  const result = await BookService.createBook({...bookData, creator});

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added successfully!',
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await BookService.getAllBooks(filters, paginationOptions);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book data retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.getSingleBook(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully !',
    data: result,
  });
});

const updateBook = catchAsync(async (req: AuthenticatedRequest, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const creator = "user" in req ? (req.user as TokenUser).userId : "";
  const book = await BookService.getSingleBook(id)
  if (book?.creator !== creator) {
    throw new ApiError(httpStatus.FORBIDDEN, `You don't have permission to update this book`)
  }
  const result = await BookService.updateBook(id, updatedData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully !',
    data: result,
  });
});

const deleteBook = catchAsync(async (req: AuthenticatedRequest, res: Response) => {
  const id = req.params.id;
  const creator = "user" in req ? (req.user as TokenUser).userId : "";
  const book = await BookService.getSingleBook(id)
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, `Book not found`)
  }
  if (book?.creator !== creator) {
    throw new ApiError(httpStatus.FORBIDDEN, `You don't have permission to delete this book`)
  }
  const result = await BookService.deleteBook(id);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: !!result,
    message: result ? 'Book deleted successfully!' : "Delete failed. Book not found.",
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
