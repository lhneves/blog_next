import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';

//Promise porque é uma função assíncrona.
export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<string>(url);
  return numberOfPosts;
};
