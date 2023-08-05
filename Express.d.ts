import { Request } from "express";

  export type CustomRequest = {
    user: {userId: string, role: string}; // Replace 'User' with the actual type of your 'user' property
  } & Request