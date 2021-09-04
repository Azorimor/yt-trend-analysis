import {google, youtube_v3} from 'googleapis';
import {YOUTUBE_API_KEY} from '../utils/config';

export class YoutubeService {
  service = google.youtube('v3');

  async getTrendingVideos(regionCode: string) {
    let videos: youtube_v3.Schema$Video[] = [];
    let nextPage = '';
    for (let i = 0; i < 4; i++) {
      const response = await this.service.videos.list({
        auth: YOUTUBE_API_KEY,
        part: ['snippet', 'contentDetails', 'statistics', 'status'],
        chart: 'mostPopular',
        regionCode: regionCode,
        maxResults: 200,
        ...(nextPage === '' && {pageToken: nextPage}),
      });
      if (response.data.items) {
        videos = videos.concat(response.data.items);
      }
      if (response.data.nextPageToken) {
        nextPage = response.data.nextPageToken;
      }
    }
    return videos;
  }
}
