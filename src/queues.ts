import {Job} from 'bullmq';
import cronQueue from './queues/cronQueue';
import trendingVideosQueue from './queues/trendingVideosQueue';
import {loadVideosWorker} from './worker/loadVideo';
import {prepareVideosWorker} from './worker/prepareVideos';
import {BullMQAdapter} from '@bull-board/api/bullMQAdapter';

const prepareQueues = (): void => {
  cronQueue
    .add('prepare-videos', {}, {repeat: {cron: '0 0 * * *'}})
    .then(() => {
      console.log('cron-queue prepare-videos added for 0 0 * * *');
    });
  cronQueue
    .add('prepare-videos', {}, {repeat: {cron: '0 12 * * *'}})
    .then(() => {
      console.log('cron-queue prepare-videos added for 0 12 * * *');
    });
  cronQueue.add('prepare-videos', {}).then(() => {
    console.log('TEST prepare-videos added.'); // TODO remove before deploy
  });

  cronQueue.on('waiting', (job: Job) => {
    console.log(job);
  });
  trendingVideosQueue.on('waiting', (job: Job) => {
    console.log(job);
  });
  prepareVideosWorker.on('failed', (job: Job) => {
    console.log(job);
  });
  loadVideosWorker.on('failed', (job: Job) => {
    console.log(job);
  });
};

export const queues = [
  new BullMQAdapter(cronQueue),
  new BullMQAdapter(trendingVideosQueue),
];
export default prepareQueues;
