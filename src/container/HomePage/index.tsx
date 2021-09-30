import { PostData } from '../../domain/posts/posts';
import { Container } from './home.style';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <h2
              style={{ backgroundColor: 'black', color: 'white' }}
              key={post.slug}
            >
              {post.title}
            </h2>
          ))}
        </Container>
      </MainContainer>
    </>
  );
}
