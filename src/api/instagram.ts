import axios from 'axios';
import { instagramFallbackPosts } from '../mocks/data';
import type { InstagramPost } from '../types';

type Rss2JsonResponse = {
  status: string;
  items: Array<{
    guid?: string;
    title?: string;
    pubDate?: string;
    link: string;
    thumbnail?: string;
    enclosure?: { link?: string };
    description?: string;
  }>;
};

const PUBLIC_PROFILE = 'shuddharoma.in';
const PUBLIC_RSS_URL = `https://rsshub.app/instagram/user/${PUBLIC_PROFILE}`;

const extractCaption = (item: Rss2JsonResponse['items'][number]): string => {
  if (item.title && item.title.trim().length > 0) return item.title;
  if (item.description && item.description.trim().length > 0) {
    return item.description.replace(/<[^>]*>/g, '').slice(0, 180);
  }
  return 'Discover the latest fragrance ritual from ShuddhAroma.';
};

export const getTopInstagramPosts = async (limit = 4): Promise<InstagramPost[]> => {
  try {
    const response = await axios.get<Rss2JsonResponse>('https://api.rss2json.com/v1/api.json', {
      params: {
        rss_url: PUBLIC_RSS_URL,
      },
      timeout: 12000,
    });

    const items = response.data.items ?? [];
    const posts = items
      .map<InstagramPost | null>((item, index) => {
        const image = item.thumbnail ?? item.enclosure?.link;
        if (!image || !item.link) return null;

        return {
          id: item.guid ?? `public-ig-${index}`,
          caption: extractCaption(item),
          mediaType: 'IMAGE',
          mediaUrl: image,
          permalink: item.link,
          timestamp: item.pubDate ?? new Date().toISOString(),
        };
      })
      .filter((post): post is InstagramPost => post !== null)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    if (posts.length === 0) return instagramFallbackPosts.slice(0, limit);
    return posts.slice(0, Math.max(3, Math.min(limit, 8)));
  } catch {
    return instagramFallbackPosts.slice(0, limit);
  }
};
