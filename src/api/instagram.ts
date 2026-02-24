import axios from 'axios';
import { instagramFallbackPosts } from '../mocks/data';
import type { InstagramPost } from '../types';

type InstagramMediaResponse = {
  data: Array<{
    id: string;
    caption?: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    media_url: string;
    thumbnail_url?: string;
    permalink: string;
    timestamp: string;
    like_count?: number;
    comments_count?: number;
  }>;
};

const formatCount = (value?: number): number | undefined => {
  if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
  return value;
};

export const getTopInstagramPosts = async (limit = 4): Promise<InstagramPost[]> => {
  const token = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
  const userId = import.meta.env.VITE_INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return instagramFallbackPosts.slice(0, limit);
  }

  try {
    const fields = [
      'id',
      'caption',
      'media_type',
      'media_url',
      'thumbnail_url',
      'permalink',
      'timestamp',
      'like_count',
      'comments_count',
    ].join(',');

    const response = await axios.get<InstagramMediaResponse>(`https://graph.instagram.com/${userId}/media`, {
      params: {
        fields,
        access_token: token,
        limit: Math.max(3, Math.min(limit, 8)),
      },
      timeout: 12000,
    });

    const posts = response.data.data
      .map<InstagramPost>((item) => ({
        id: item.id,
        caption: item.caption ?? 'Discover the latest fragrance ritual from ShuddhAroma.',
        mediaType: item.media_type,
        mediaUrl: item.media_url,
        thumbnailUrl: item.thumbnail_url,
        permalink: item.permalink,
        timestamp: item.timestamp,
        likeCount: formatCount(item.like_count),
        commentsCount: formatCount(item.comments_count),
      }))
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    if (posts.length === 0) return instagramFallbackPosts.slice(0, limit);
    return posts.slice(0, limit);
  } catch {
    return instagramFallbackPosts.slice(0, limit);
  }
};
