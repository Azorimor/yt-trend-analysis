import {Queue} from 'bullmq';
import {REDIS_CONNECTION} from '../utils/config';

const trendingVideosQueue = new Queue('load-trending-videos', {
  connection: REDIS_CONNECTION,
});

export default trendingVideosQueue;
