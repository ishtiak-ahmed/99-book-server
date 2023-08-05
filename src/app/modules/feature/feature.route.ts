import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FeatureValidation } from './feature.validation';
import { FeatureController } from './feature.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  FeatureController.getAllFeatureItem
);

router.post(
  '/',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  validateRequest(FeatureValidation.createFeatureZodSchema),
  FeatureController.addFeatureItem
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  FeatureController.deleteFeatureItem
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  validateRequest(FeatureValidation.updateFeatureZodSchema),
  FeatureController.updateFeatureItem
);

export const FeatureRoutes = router;
