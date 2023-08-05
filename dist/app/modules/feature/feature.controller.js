"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const feature_service_1 = require("./feature.service");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const pagination_1 = require("../../../constants/pagination");
const pick_1 = __importDefault(require("../../../shared/pick"));
const addFeatureItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = 'user' in req ? req.user.userId : '';
    const result = yield feature_service_1.FeatureService.addToFeatureList(Object.assign(Object.assign({}, req.body), { user }));
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: `Added to ${req.body.status} successfully!`,
        data: result,
    });
}));
const getAllFeatureItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = 'user' in req ? req.user.userId : '';
    const status = req.query.status;
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield feature_service_1.FeatureService.getAllFeatureItems({ user, status }, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Features data retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
}));
const updateFeatureItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = 'user' in req ? req.user.userId : '';
    const feature = yield feature_service_1.FeatureService.getSingleItem(req.params.id);
    if (((_a = feature === null || feature === void 0 ? void 0 : feature.user) === null || _a === void 0 ? void 0 : _a.toString()) !== user) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, `You don't have permission to update this item`);
    }
    const result = yield feature_service_1.FeatureService.addToFeatureList(Object.assign(Object.assign({}, req.body), { user }));
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: `Added to ${req.body.status} successfully!`,
        data: result,
    });
}));
const deleteFeatureItem = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const user = 'user' in req ? req.user.userId : '';
    const feature = yield feature_service_1.FeatureService.getSingleItem(req.params.id);
    if (((_b = feature === null || feature === void 0 ? void 0 : feature.user) === null || _b === void 0 ? void 0 : _b.toString()) !== user) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, `You don't have permission to delete this item`);
    }
    const result = yield feature_service_1.FeatureService.deleteFeatureItem(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: `Item deleted successfully!`,
        data: result,
    });
}));
exports.FeatureController = {
    addFeatureItem,
    updateFeatureItem,
    deleteFeatureItem,
    getAllFeatureItem,
};
