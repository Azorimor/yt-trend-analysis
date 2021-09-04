import {google} from 'googleapis';
import {YOUTUBE_API_KEY} from '../utils/config';

export class YoutubeService {
  service = google.youtube('v3');

  async getTrendingVideos(regionCode: string) {
    const response = await this.service.videos.list({
      auth: YOUTUBE_API_KEY,
      part: ['snippet', 'contentDetails', 'statistics'],
      chart: 'mostPopular',
      regionCode: regionCode,
      maxResults: 200,
    });
    console.log(response);
  }
}
