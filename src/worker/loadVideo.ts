import {Worker, Job} from 'bullmq';
import {REDIS_CONNECTION} from '../utils/config';
import {YoutubeService} from '../services/youtube';
import {VideoModel} from '../models/video';

const youtube = new YoutubeService();

export const loadVideosWorker = new Worker(
  'load-trending-videos',
  async (job: Job) => {
    const videos = await youtube.getTrendingVideos(job.data.region);
    job.updateProgress(50);
    await VideoModel.insertMany(videos);
    job.updateProgress(100);
    return videos.map(video => video.snippet);
  },
  {connection: REDIS_CONNECTION}
);
