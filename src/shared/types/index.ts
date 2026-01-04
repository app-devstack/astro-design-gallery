/**
 * Category
 */
export interface CategoryType {
  id: string;
  name: string;
  slug: string;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Tag
 */
export interface TagType {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Work
 */
export interface WorkType {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string[];
  categoryId: string;
  shape: string | null;
  width: number | null;
  height: number | null;
  isPublished: number;
  createdAt: Date;
  updatedAt: Date;
}
