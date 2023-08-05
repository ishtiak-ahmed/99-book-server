/* eslint-disable no-unused-vars */
import { Types } from 'mongoose';
import { Status } from './feature.constant';

export type IFeature = {
  book: Types.ObjectId;
  user: Types.ObjectId;
  status: Status
}
