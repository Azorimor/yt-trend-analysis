import {Worker, Job} from 'bullmq';
import {REDIS_CONNECTION} from '../utils/config';
import {YoutubeService} from '../services/youtube';
import {VideoModel} from '../models/video';

const youtube = new YoutubeService();

export const loadVideosWorker = new Worker(
  'load-trending-videos',
  async (job: Job) => {
    const videos = await youtube.getTrendingVideos(
      job.data.region,
      job.data.categoryId
    );
    job.updateProgress(50);
    await VideoModel.insertMany(videos);
    job.updateProgress(100);
    return videos.map(video => ({
      id: video.youtube.id,
      title: video.youtube.snippet?.title,
      url: `https://www.youtube.com/watch?v=${video.youtube.id}`,
      fetchedCategoryId: video.categoryId,
      videoCategoryId: video.youtube.snippet?.categoryId,
    }));
  },
  {connection: REDIS_CONNECTION}
);
