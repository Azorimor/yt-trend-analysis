import {youtube_v3} from 'googleapis';
import {Schema, model} from 'mongoose';

export interface Video {
  youtube: youtube_v3.Schema$Video;
  rank: Number;
  time: Date;
}

const schema = new Schema<Video>({
  rank: Number,
  time: Date,
  youtube: {
    id: String,
    etag: String,
    snippet: {
      publishedAt: String,
      channelId: String,
      title: String,
      description: String,
      thumbnails: {
        maxres: {
          url: String,
        },
      },
      channelTitle: String,
      tags: [String],
      categoryId: String,
      liveBroadcastContent: String,
      defaultLanguage: String,
      defaultAudioLanguage: String,
    },
    contentDetails: {
      duration: String,
      dimension: String,
      definition: String,
      caption: String,
      licensedContent: Boolean,
      regionRestriction: {
        allowed: [String],
        blocked: [String],
      },
    },
    status: {
      uploadStatus: String,
      failureReason: String,
      rejectionReason: String,
      privacyStatus: String,
      publishAt: String,
      license: String,
      embeddable: Boolean,
      publicStatsViewable: Boolean,
      madeForKids: Boolean,
      selfDeclaredMadeForKids: Boolean,
    },
    statistics: {
      viewCount: Number,
      likeCount: Number,
      dislikeCount: Number,
      favoriteCount: Number,
      commentCount: Number,
    },
  },
});

export const VideoModel = model('Video', schema);
