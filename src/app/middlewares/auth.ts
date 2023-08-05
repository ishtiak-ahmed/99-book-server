import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';
import { TokenUser } from '../../enums/user';

const auth =
  (...allowedRoles: string[]) =>
  async (
    req: Request & { user?: TokenUser },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }
      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.secret as Secret
      ) as { userId: string; role: string };

      req.user = verifiedUser;

      if (allowedRoles.length && !allowedRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
