import { mockCategories } from '@shared/mock/mockCategories';
import type { AppWorkType } from '@shared/types';
import { mockTags } from '@shared/mock/mockTags';

/**
 * Mock works
 *
 * 画像URLは、Googleドライブの共有リンクから取得
 * 参考: https://developers.google.com/photos/library/guides/access-media-items?hl=ja
 */
export const mockWorks: AppWorkType[] = [
  {
    id: '019b871c-0a41-770c-b818-77e68767c52e',
    title: 'サンプル作品1',
    description: 'サンプル作品の説明文です。',
    imageUrl: ['https://lh3.googleusercontent.com/d/13BK2DA5Yb9DCv5aOPW20aYtWMB-93geF'],
    categoryId: mockCategories[0].id,
    shape: '縦長',
    width: 800,
    height: 1280,
    isPublished: 1,
    createdAt: new Date(),
    updatedAt: new Date(),

    tags: mockTags,
    category: mockCategories[0],
  },
  {
    id: '019b87f4-e642-766e-ac7b-cf8eb64c055c',
    title: 'サンプル作品2',
    description: 'サンプル作品の説明文です。',
    imageUrl: ['https://lh3.googleusercontent.com/d/13BK2DA5Yb9DCv5aOPW20aYtWMB-93geF'],
    categoryId: mockCategories[0].id,
    shape: '縦長',
    width: 800,
    height: 1280,
    isPublished: 1,
    createdAt: new Date(),
    updatedAt: new Date(),

    tags: mockTags,
    category: mockCategories[0],
  },
  {
    id: '019b87f4-e643-75bf-ac1a-4a53bb0c57e7',
    title: 'Astro Design Gallery',
    description: 'サンプル作品の説明文です。',
    imageUrl: ['https://lh3.googleusercontent.com/d/13BK2DA5Yb9DCv5aOPW20aYtWMB-93geF'],
    categoryId: mockCategories[0].id,
    shape: '縦長',
    width: 800,
    height: 1280,
    isPublished: 1,
    createdAt: new Date(),
    updatedAt: new Date(),

    tags: [],
    category: mockCategories[0],
  },
];
