import React from 'react';
import Link from 'next/link';

import { Container, PostCardCover, PostcardHeading } from './postCard.style';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a href="">
            <img src={cover} alt={title} />
          </a>
        </Link>
      </PostCardCover>
      <PostcardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a href="">{title}</a>
        </Link>
      </PostcardHeading>
    </Container>
  );
};

export default PostCard;
