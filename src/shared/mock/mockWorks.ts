import { mockCategories } from '@shared/mock/mockCategories';
import type { WorkType } from '@shared/types';

/**
 * Mock works
 */
export const mockWorks: WorkType[] = [
  {
    id: '019b871c-0a41-770c-b818-77e68767c52e',
    title: 'Astro Design Gallery',
    description: 'A curated gallery of design inspiration built with Astro.',
    imageUrl: ['/works/astro-design-gallery/1.png'],
    categoryId: mockCategories[0].id,
    shape: '縦長',
    width: 800,
    height: 1280,
    isPublished: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
