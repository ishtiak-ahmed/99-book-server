/* eslint-disable no-unused-vars */
import { Types } from 'mongoose';

export type IReview = {
  book: Types.ObjectId;
  user: Types.ObjectId;
  comment: string;
  ratings: number;
};

