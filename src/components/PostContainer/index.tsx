import { Container } from './postContainer.style';

export type PostContainerProps = {
  content: string;
};

export const PostContainer = ({ content }: PostContainerProps) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};
