
interface TagType {
  id: string; // uuid_v7
  name: string; // unique

  createdAt: Date;
  updatedAt: Date;
}

interface GalleryImgType {
  id: string; // uuid_v7
  title: string;
  description?: string;
  url: string;
  
  tags: TagType[];

  createdAt: Date;
  updatedAt: Date;
}