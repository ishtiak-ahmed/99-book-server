import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

// router.get('/sign-up', UserController.getAllUsers);
router.get('/my-profile', auth(ENUM_USER_ROLE.USER), UserController.getProfile);
router.get('/:id', UserController.getSingleUser);
router.patch('/my-profile', auth(ENUM_USER_ROLE.USER), UserController.updateProfile);
// router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.updateUser);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER), UserController.deleteUser);

router.patch('/my-profile', validateRequest(UserValidation.updateUserZodSchema), UserController.updateProfile);

export const UserRoutes = router;
