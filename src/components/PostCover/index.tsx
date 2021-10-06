import React from 'react';

import { Container } from './postCover.style';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return <Container src={coverUrl} alt={alt} />;
};

export default PostCover;
