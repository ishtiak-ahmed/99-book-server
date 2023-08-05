import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { TokenUser } from '../../../enums/user';
import ApiError from '../../../errors/ApiError';
import { ReviewService } from './review.service';
import { IReview } from './review.interface';

const addReview = catchAsync(async (req: Request, res: Response) => {
  const { ...reviewData } = req.body;
  const user = "user" in req ? (req.user as TokenUser).userId : "";
  const result = await ReviewService.addReview({...reviewData, user});

  sendResponse<IReview>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully!',
    data: result,
  });
});

const getAllReview = catchAsync(async (req: Request, res: Response) => {
    const bookId = req.params.id
    const result = await ReviewService.getAllReview({book: bookId});
  
    sendResponse<IReview[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review data retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

const updateReview = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const user = "user" in req ? (req.user as TokenUser).userId : "";
  const review = await ReviewService.getSingleReview(id)
  if (review?.user.toString() !== user) {
    throw new ApiError(httpStatus.FORBIDDEN, `You don't have permission to update this review`)
  }
  const result = await ReviewService.updateReview(id, updatedData);

  sendResponse<IReview>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review updated successfully!',
    data: result,
  });
});

const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = "user" in req ? (req.user as TokenUser).userId : "";
  const review = await ReviewService.getSingleReview(id)
  if (!review) {
    throw new ApiError(httpStatus.NOT_FOUND, `Review not found`)
  }
  if (review?.user.toString() !== user) {
    throw new ApiError(httpStatus.FORBIDDEN, `You don't have permission to delete this review`)
  }
  const result = await ReviewService.deleteReview(id);
  sendResponse<IReview>(res, {
    statusCode: httpStatus.OK,
    success: !!result,
    message: result ? 'Review deleted successfully!' : "Delete failed. Review not found.",
    data: result,
  });
});

export const ReviewController = {
  addReview,
  getAllReview,
  updateReview,
  deleteReview
};
