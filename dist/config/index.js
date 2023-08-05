"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const dotenv_1 = __importDefault(require("dotenv"));
// import path from 'path';
const env_var_1 = __importDefault(require("./env.var"));
dotenv_1.default.config();
exports.default = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || env_var_1.default.port,
    database_url: process.env.NODE_ENV === 'Production' ? process.env.DATABASE_URL || env_var_1.default.db : env_var_1.default.localDb,
    bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt: {
        secret: process.env.JWT_SECRET || env_var_1.default.secret,
        refresh_secret: process.env.JWT_REFRESH_SECRET || env_var_1.default.refreshSecret,
        expires_in: process.env.JWT_EXPIRES_IN || env_var_1.default.expireIn,
        refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN || env_var_1.default.refreshExpireIn,
    },
};
