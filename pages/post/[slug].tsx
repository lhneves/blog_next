import React from 'react';

import { PostData } from '../../src/domain/posts/posts';

import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { countAllPosts } from '../../src/data/posts/count-all-posts';
import { getAllPosts } from '../../src/data/posts/get-all-posts';
import { getPost } from '../../src/data/posts/get-post';

export type DynamicPostProps = {
  post: PostData;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

function DynamicPost({ post }: DynamicPostProps) {
  return <p>{post.title}</p>;
}

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as IParams;
  const posts = await getPost(slug);

  return {
    props: { post: posts[0] },
    // revalidate: 5,
  };
};
