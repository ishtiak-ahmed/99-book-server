import { IFeature } from './feature.interface';
import { Feature } from './feature.model';
import { Status } from './feature.constant';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';

const addToFeatureList = async (
  payload: IFeature
): Promise<IFeature | null> => {
  const addedItem = await Feature.create(payload);
  return addedItem;
};

const getAllFeatureItems = async (
  query: {user: string, status: Status},
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IFeature[]>> => {
  const { page, limit, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const items = await Feature.find(query).skip(skip).limit(limit);
  const total = await Feature.countDocuments(query);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: items,
  };
};

const getSingleItem = async (id: string): Promise<IFeature | null> => {
  const item = await Feature.findById(id)
  return item;
}

const moveFeatureItem = async (
  id: string,
  status: Status
): Promise<IFeature | null> => {
  const result = await Feature.findOneAndUpdate(
    { _id: id },
    { status },
    {
      new: true,
    }
  );
  return result;
};

const deleteFeatureItem = async (id: string): Promise<IFeature | null> => {
  const result = await Feature.findByIdAndDelete(id).lean();
  return result;
};

export const FeatureService = {
  addToFeatureList,
  deleteFeatureItem,
  moveFeatureItem,
  getAllFeatureItems,
  getSingleItem
};
