import HomePage from '../src/container/HomePage';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../src/data/posts/get-all-posts';
import { PostData } from '../src/domain/posts/posts';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=30');

  return {
    props: { posts },
    // revalidate: 5,
  };
};
