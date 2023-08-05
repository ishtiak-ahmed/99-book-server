import { QueryOptions } from 'mongoose';
import { IGenericResponse } from '../../../interfaces/common';
import ApiError from '../../../errors/ApiError';
import { BookService } from '../book/book.service';
import { IReview } from './review.interface';
import { Review } from './review.model';

const addReview = async (payload: IReview): Promise<IReview | null> => {
  const book = await BookService.getSingleBook(payload.book.toString());
  if (!book) {
    throw new ApiError(404, "Invalid book id.");
  }

  const result = await Review.create(payload)
  return result;
};

const getAllReview = async (
  query: QueryOptions
): Promise<IGenericResponse<IReview[]>> => {

  const result = await Review.find(query)

  const total = await Review.countDocuments(query);

  return {
    meta: {
      page: 1,
      limit: -1,
      total,
    },
    data: result,
  };
};

const updateReview = async (
  id: string,
  payload: Partial<IReview>
): Promise<IReview | null> => {
  const result = await Review.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const getSingleReview =  async (id: string): Promise<IReview | null> => {
  const review = await Review.findById(id)
  return review;
}

const deleteReview = async (
  id: string
): Promise<IReview | null> => {
  const result = await Review.findByIdAndDelete(id).lean();
  return result;
};

export const ReviewService = {
  addReview,
  getAllReview,
  updateReview,
  deleteReview,
  getSingleReview
};
