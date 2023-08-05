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
exports.ReviewService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const book_service_1 = require("../book/book.service");
const review_model_1 = require("./review.model");
const addReview = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_service_1.BookService.getSingleBook(payload.book.toString());
    if (!book) {
        throw new ApiError_1.default(404, "Invalid book id.");
    }
    const result = yield review_model_1.Review.create(payload);
    return result;
});
const getAllReview = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.find(query);
    const total = yield review_model_1.Review.countDocuments(query);
    return {
        meta: {
            page: 1,
            limit: -1,
            total,
        },
        data: result,
    };
});
const updateReview = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const getSingleReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield review_model_1.Review.findById(id);
    return review;
});
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findByIdAndDelete(id).lean();
    return result;
});
exports.ReviewService = {
    addReview,
    getAllReview,
    updateReview,
    deleteReview,
    getSingleReview
};
