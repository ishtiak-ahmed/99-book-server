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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureService = void 0;
const feature_model_1 = require("./feature.model");
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const addToFeatureList = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const addedItem = yield feature_model_1.Feature.create(payload);
    return addedItem;
});
const getAllFeatureItems = (query, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const items = yield feature_model_1.Feature.find(query).skip(skip).limit(limit);
    const total = yield feature_model_1.Feature.countDocuments(query);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: items,
    };
});
const getSingleItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield feature_model_1.Feature.findById(id);
    return item;
});
const moveFeatureItem = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield feature_model_1.Feature.findOneAndUpdate({ _id: id }, { status }, {
        new: true,
    });
    return result;
});
const deleteFeatureItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield feature_model_1.Feature.findByIdAndDelete(id).lean();
    return result;
});
exports.FeatureService = {
    addToFeatureList,
    deleteFeatureItem,
    moveFeatureItem,
    getAllFeatureItems,
    getSingleItem
};
