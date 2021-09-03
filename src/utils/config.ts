import * as dotenv from 'dotenv';

dotenv.config();
const path = `${__dirname}/../../.env`;
dotenv.config({path: path});

export const PROD = process.env.NODE_ENV === 'production';
export const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/ytt';
export const PORT = process.env.PORT || 3000;
