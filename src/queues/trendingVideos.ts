import {Queue, QueueScheduler} from 'bullmq';
import {REDIS_CONNECTION} from '../utils/config';

const trendingVideosQueueScheduler = new QueueScheduler('trending-videos', {
  connection: REDIS_CONNECTION,
});
const trendingVideosQueue = new Queue('trending-videos', {
  connection: REDIS_CONNECTION,
});

export default trendingVideosQueue;
