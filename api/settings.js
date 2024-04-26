import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4500;

export const URI_MONGODB = process.env.URI_MONGODB;

export const SECRETE_ACCESS_TOKEN = process.SECRETE_ACCESS_TOKEN;

export const SALT_BYCRIPT_VALUE = process.SALT_BYCRIPT_VALUE || 10;
