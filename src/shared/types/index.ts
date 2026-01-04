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
  shape: string | null;
  width: number | null;
  height: number | null;
  isPublished: number;
  createdAt: Date;
  updatedAt: Date;

  categoryId: string;
}

/**
 * 作品型
 */
export interface AppWorkType extends WorkType {
  category: CategoryType;
  tags: TagType[];
}
