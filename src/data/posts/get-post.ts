import { markdownToHtml } from './../../utils/markdown-to-html';
import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/posts';
import { fetchJson } from '../../utils/fetch-json';

//Promise porque é uma função assíncrona.
export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?slug=${slugString}`;
  const jsonPost = await fetchJson<PostData[]>(url);
  const content = await markdownToHtml(jsonPost[0].content);
  const finalContent = { ...jsonPost[0], content };
  return [finalContent];
};
