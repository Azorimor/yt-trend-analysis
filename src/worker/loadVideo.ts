import {Worker, Job} from 'bullmq';
import {REDIS_CONNECTION} from '../utils/config';
import {YoutubeService} from '../services/youtube';

const youtube = new YoutubeService();

export const loadVideosWorker = new Worker(
  'load-trending-videos',
  async (job: Job) => {
    console.log(`Region: ${job.data.region}`);
    youtube.getTrendingVideos(job.data.region);
  },
  {connection: REDIS_CONNECTION}
);
