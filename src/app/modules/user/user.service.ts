import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (
  user: IUser
): Promise<IUser | null> => {
  const createdUser = await User.create(user)
  return createdUser
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const user = await User.findById(id);
  return user;
};

const updateUser = async (id: string, payload: Partial<IUser>): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id).lean();
  return result;
};

export const UserService = {
  createUser,
  getSingleUser,
  updateUser,
  deleteUser
};
