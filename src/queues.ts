import cronQueue from './queues/cronQueue';
import trendingVideosQueue from './queues/trendingVideosQueue';
import {prepareVideosWorker} from './worker/prepareVideos';

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
    console.log('TEST prepare-videos added.');
  });

  cronQueue.on('failed', (error: any) => {
    console.log(error);
  });
  trendingVideosQueue.on('failed', (error: any) => {
    console.log(error);
  });
};
export default prepareQueues;
