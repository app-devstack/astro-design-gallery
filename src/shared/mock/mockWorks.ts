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
    title: 'SNOW CAT',
    description: 'サンプル作品の説明文です。',
    imageUrl: ['/works/neko_daruma.png'],
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
    title: 'WHITE GHOST',
    description: 'サンプル作品の説明文です。',
    imageUrl: ['/works/yuki_ghost.png'],
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
    title: 'ゆずねこ',
    description: 'サンプル作品の説明文です。',
    imageUrl: ['/works/yuzu_neko.png'],
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
