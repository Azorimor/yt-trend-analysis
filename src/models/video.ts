import {youtube_v3} from 'googleapis';
import {Schema, model} from 'mongoose';

interface Video {
  id: string;
  etag: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      maxres: {
        url: string;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    defaultAudioLanguage: string;
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: {
      allowed: string[];
      blocked: string[];
    };
  };
  status: {
    uploadStatus: string;
    failureReason: string;
    rejectionReason: string;
    privacyStatus: string;
    publishAt: string;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
  };
  statistics: {
    viewCount: Number;
    likeCount: Number;
    dislikeCount: Number;
    favoriteCount: Number;
    commentCount: Number;
  };
}

const schema = new Schema<youtube_v3.Schema$Video>({
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
});

export const VideoModel = model('Video', schema);
