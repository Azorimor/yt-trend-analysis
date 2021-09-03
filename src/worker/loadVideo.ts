import {Worker, Job} from 'bullmq';
import {REDIS_CONNECTION} from '../utils/config';

export const loadVideosWorker = new Worker(
  'load-trending-videos',
  async (job: Job) => {
    console.log(`Job executed: ${job.id}`);
    console.log(`Region: ${job.data.region}`);
  },
  {connection: REDIS_CONNECTION}
);
