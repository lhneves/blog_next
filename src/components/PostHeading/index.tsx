import React, { ReactNode } from 'react';
import { Container } from './postHeading.style';

export type HeadingProps = {
  children: ReactNode;
};

const PostHeading = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>;
};

export default PostHeading;
