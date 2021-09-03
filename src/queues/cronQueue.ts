import {Queue, QueueScheduler} from 'bullmq';
import {REDIS_CONNECTION} from '../utils/config';

const cronQueueScheduler = new QueueScheduler('trending-videos', {
  connection: REDIS_CONNECTION,
});
const cronQueue = new Queue('trending-videos', {
  connection: REDIS_CONNECTION,
});

export default cronQueue;
