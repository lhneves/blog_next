export type PostID = string;

export type PostAuthor = {
  id: PostID;
  name: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
};

export type PostCategory = {
  id: PostID;
  name: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  id: PostID;
  alternativeText: string;
  caption: string;
  provider: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostData = {
  id: PostID;
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  updatedAt: string;
  createdAt: string;
  published_at: string;
  cover: PostCover;
};
