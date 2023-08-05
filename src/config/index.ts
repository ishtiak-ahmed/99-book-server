/* eslint-disable no-undef */
import dotenv from 'dotenv';
// import path from 'path';
import envVar from './env.var';

dotenv.config();

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT || envVar.port,
  database_url: process.env.NODE_ENV === 'Production' ? process.env.DATABASE_URL || envVar.db : envVar.localDb,
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    secret: process.env.JWT_SECRET || envVar.secret,
    refresh_secret: process.env.JWT_REFRESH_SECRET || envVar.refreshSecret,
    expires_in: process.env.JWT_EXPIRES_IN || envVar.expireIn,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN || envVar.refreshExpireIn,
  },
};
