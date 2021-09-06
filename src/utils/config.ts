import * as dotenv from 'dotenv';

dotenv.config();
const path = `${__dirname}/../../.env`;
dotenv.config({path: path});

export const PROD = process.env.NODE_ENV === 'production';
export const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/ytt';
export const PORT = process.env.PORT || 3000;
export const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
export const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'mypassword';
export const REDIS_CONNECTION = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
};

export const REGIONS = process.env.REGIONS
  ? process.env.REGIONS.split(',')
  : ['US', 'DE'];

export const CATEGORIES = process.env.CATEGORIES
  ? process.env.CATEGORIES.split(',')
  : ['0', '10', '20'];

export const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || '';
export const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || 'supersecrettoken42';
export const DASHBOARD_ADMIN_USERNAME =
  process.env.DASHBOARD_ADMIN_USERNAME || 'bull';
export const DASHBOARD_ADMIN_PASSWORD =
  process.env.DASHBOARD_ADMIN_PASSWORD || 'mypassword';
