import {google, youtube_v3} from 'googleapis';
import {Video} from '../models/video';
import {YOUTUBE_API_KEY} from '../utils/config';

export class YoutubeService {
  service = google.youtube('v3');

  async getTrendingVideos(regionCode: string, categoryId: string) {
    let youtubeVideos: youtube_v3.Schema$Video[] = [];
    const videos: Video[] = [];
    let nextPage = '';
    for (let i = 0; i < 4; i++) {
      const response = await this.service.videos.list({
        auth: YOUTUBE_API_KEY,
        part: ['snippet', 'contentDetails', 'statistics', 'status'],
        chart: 'mostPopular',
        regionCode: regionCode,
        maxResults: 200,
        videoCategoryId: categoryId,
        ...(nextPage === '' && {pageToken: nextPage}),
      });
      if (response.data.items) {
        youtubeVideos = youtubeVideos.concat(response.data.items);
      }
      if (response.data.nextPageToken) {
        nextPage = response.data.nextPageToken;
      }
    }
    const time = new Date();
    youtubeVideos.forEach((ytVideo: youtube_v3.Schema$Video, i) => {
      const video: Video = {
        youtube: ytVideo,
        rank: i + 1,
        time: time,
        categoryId: categoryId,
      };
      videos.push(video);
    });
    return videos;
  }
}
