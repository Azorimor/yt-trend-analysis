import {Worker, Job} from 'bullmq';
import trendingVideosQueue from '../queues/trendingVideosQueue';
import {REGIONS} from '../utils/config';

export const prepareVideosWorker = new Worker(
  'prepare-videos',
  async (job: Job) => {
    console.log(`Job executed: ${job.id}`);
    REGIONS.forEach((region, i) => {
      trendingVideosQueue.add('load-region', {region: region});
      job.updateProgress((i + 1) / REGIONS.length);
    });
  }
);
