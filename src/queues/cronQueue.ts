import {Queue, QueueScheduler} from 'bullmq';
import {REDIS_CONNECTION} from '../utils/config';

const cronQueueScheduler = new QueueScheduler('prepare-videos', {
  connection: REDIS_CONNECTION,
});
const cronQueue = new Queue('prepare-videos', {
  connection: REDIS_CONNECTION,
});

export default cronQueue;
