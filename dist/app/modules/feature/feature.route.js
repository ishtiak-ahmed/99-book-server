"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const feature_validation_1 = require("./feature.validation");
const feature_controller_1 = require("./feature.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), feature_controller_1.FeatureController.getAllFeatureItem);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(feature_validation_1.FeatureValidation.createFeatureZodSchema), feature_controller_1.FeatureController.addFeatureItem);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN), feature_controller_1.FeatureController.deleteFeatureItem);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(feature_validation_1.FeatureValidation.updateFeatureZodSchema), feature_controller_1.FeatureController.updateFeatureItem);
exports.FeatureRoutes = router;
