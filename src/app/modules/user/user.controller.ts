import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import { UserService } from './user.service';
import { TokenUser } from '../../../enums/user';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const result = await UserService.createUser({...userData, role: 'user'});

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params
  const result = await UserService.getSingleUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User data retrieved successfully!',
    meta: {page: 1, limit: 1, total: 1},
    data: result,
  });
});

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const id = "user" in req ? (req.user as TokenUser).userId : "";
  const result = await UserService.getSingleUser(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully !',
    data: result,
  });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const id = "user" in req ? (req.user as TokenUser).userId : "";
  const updatedData = req.body;
  const result = await UserService.updateUser(id, updatedData);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully !',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = "user" in req ? (req.user as TokenUser).userId : "";
  const result = await UserService.deleteUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: !!result,
    message: result ? 'Profile deleted successfully!' : 'Delete failed, profile not found',
    data: result,
  });
});

export const UserController = {
  createUser,
  getSingleUser,
  getProfile,
  updateProfile,
  deleteUser,
};
