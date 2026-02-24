export type Product = {
  id: string;
  name: string;
  price: number;
  subtitle: string;
  description: string;
  ingredients: string[];
  usage: string;
  rating: number;
  image: string;
  gallery: string[];
  category: string;
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  message: string;
  rating: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type InstagramPost = {
  id: string;
  caption: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  timestamp: string;
  likeCount?: number;
  commentsCount?: number;
};
