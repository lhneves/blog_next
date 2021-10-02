import { PostData } from '../../domain/posts/posts';
import { Container } from './home.style';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';

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
            <PostCard
              title={post.title}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              key={post.slug}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
