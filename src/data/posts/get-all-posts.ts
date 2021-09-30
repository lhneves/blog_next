import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/posts';
import { fetchJson } from '../../utils/fetch-json';

//Promise porque é uma função assíncrona.
export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts;
};
