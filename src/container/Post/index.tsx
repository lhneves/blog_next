import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';

import { PostData } from '../../domain/posts/posts';

export type PostProps = {
  post: PostData;
};

function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Post;
