/* eslint-disable no-unused-vars */
export enum ENUM_USER_ROLE {
  ADMIN = 'admin',
  USER = 'user',
}

export type TokenUser = {
  userId: string,
  role: string
}