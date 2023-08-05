/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { Role } from './user.constant';

export type IUser = {
  _id: string;
  phoneNumber: string;
  email: string;
  role: Role;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, 'email' | '_id' | 'password' | 'role'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;

export type UserFilters = {
  searchTerm?: string;
};
