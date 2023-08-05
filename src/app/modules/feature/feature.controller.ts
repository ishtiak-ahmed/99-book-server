import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { TokenUser } from '../../../enums/user';
import { FeatureService } from './feature.service';
import { IFeature } from './feature.interface';
import ApiError from '../../../errors/ApiError';
import { paginationFields } from '../../../constants/pagination';
import pick from '../../../shared/pick';
import { Status } from './feature.constant';

const addFeatureItem: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = 'user' in req ? (req.user as TokenUser).userId : '';
    const result = await FeatureService.addToFeatureList({ ...req.body, user });

    sendResponse<IFeature>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Added to ${req.body.status} successfully!`,
      data: result,
    });
  }
);

const getAllFeatureItem: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = 'user' in req ? (req.user as TokenUser).userId : '';
    const status = req.query.status as Status;
    const paginationOptions = pick(req.query, paginationFields);
    const result = await FeatureService.getAllFeatureItems(
      { user, status },
      paginationOptions
    );

    sendResponse<IFeature[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Features data retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

const updateFeatureItem: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = 'user' in req ? (req.user as TokenUser).userId : '';
    const feature = await FeatureService.getSingleItem(req.params.id);
    if (feature?.user?.toString() !== user) {
      throw new ApiError(
        httpStatus.FORBIDDEN,
        `You don't have permission to update this item`
      );
    }
    const result = await FeatureService.addToFeatureList({ ...req.body, user });

    sendResponse<IFeature>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Added to ${req.body.status} successfully!`,
      data: result,
    });
  }
);

const deleteFeatureItem: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = 'user' in req ? (req.user as TokenUser).userId : '';
    const feature = await FeatureService.getSingleItem(req.params.id);
    if (feature?.user?.toString() !== user) {
      throw new ApiError(
        httpStatus.FORBIDDEN,
        `You don't have permission to delete this item`
      );
    }
    const result = await FeatureService.deleteFeatureItem(req.params.id);

    sendResponse<IFeature>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Item deleted successfully!`,
      data: result,
    });
  }
);

export const FeatureController = {
  addFeatureItem,
  updateFeatureItem,
  deleteFeatureItem,
  getAllFeatureItem,
};
