import {Worker, Job} from 'bullmq';
import trendingVideosQueue from '../queues/trendingVideosQueue';
import {CATEGORIES, REDIS_CONNECTION, REGIONS} from '../utils/config';

export const prepareVideosWorker = new Worker(
  'prepare-videos',
  async (job: Job) => {
    REGIONS.forEach((region, i) => {
      CATEGORIES.forEach(categoryId => {
        trendingVideosQueue.add(
          'load-region-videos',
          {region: region, categoryId: categoryId},
          {removeOnComplete: 10}
        );
      });
      job.updateProgress(((i + 1) / REGIONS.length) * 100);
    });
    return REGIONS;
  },
  {connection: REDIS_CONNECTION}
);
