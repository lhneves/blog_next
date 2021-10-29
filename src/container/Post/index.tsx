import React from 'react';
import { Comments } from '../../components/Comments';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import PostHeading from '../../components/PostHeading';

import { PostData } from '../../domain/posts/posts';

export type PostProps = {
  post: PostData;
};

function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <PostHeading>{post.title}</PostHeading>
        <PostCover
          coverUrl={post.cover.formats.large.url}
          alt={post.cover.name}
        />
        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.createdAt}
        />
        <PostContainer content={post.content} />
        <Comments title={post.title} slug={post.slug} />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Post;
