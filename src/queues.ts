import {Job} from 'bullmq';
import cronQueue from './queues/cronQueue';
import trendingVideosQueue from './queues/trendingVideosQueue';
import {loadVideosWorker} from './worker/loadVideo';
import {prepareVideosWorker} from './worker/prepareVideos';
import {BullMQAdapter} from '@bull-board/api/bullMQAdapter';
import {PROD} from './utils/config';

const prepareQueues = (): void => {
  cronQueue
    .add(
      'prepare-videos',
      {},
      {repeat: {cron: '0 0 * * *'}, removeOnComplete: 10}
    )
    .then(() => {
      console.log('cron-queue prepare-videos added for 0 0 * * *');
    });
  // cronQueue
  //   .add(
  //     'prepare-videos',
  //     {},
  //     {repeat: {cron: '0 12 * * *'}, removeOnComplete: 10}
  //   )
  //   .then(() => {
  //     console.log('cron-queue prepare-videos added for 0 12 * * *');
  //   });
  if (!PROD) {
    cronQueue.add('prepare-videos', {removeOnComplete: 10}).then(() => {
      console.log('TEST prepare-videos added.');
    });
  }

  cronQueue.on('waiting', (job: Job) => {
    job.log('waiting...');
  });
  trendingVideosQueue.on('waiting', (job: Job) => {
    job.log('waiting');
  });
  prepareVideosWorker.on('failed', (job: Job) => {
    job.log('failed');
  });
  loadVideosWorker.on('failed', (job: Job) => {
    job.log('failed');
  });
};

export const queues = [
  new BullMQAdapter(cronQueue),
  new BullMQAdapter(trendingVideosQueue),
];
export default prepareQueues;
