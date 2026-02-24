import { apiClient } from './client';
import { products, reviews } from '../mocks/data';
import type { Product, Review } from '../types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  await apiClient.get('/products').catch(() => undefined);
  await delay(300);
  return products;
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  await apiClient.get(`/products/${id}`).catch(() => undefined);
  await delay(200);
  return products.find((product) => product.id === id);
};

export const getReviewsByProduct = async (productId: string): Promise<Review[]> => {
  await apiClient.get(`/products/${productId}/reviews`).catch(() => undefined);
  await delay(200);
  return reviews.filter((review) => review.productId === productId);
};
