import { ListedPost } from "../../lib/types";
import Link from "next/link";
import { Container, Card, Title, ImageContainer, CardContent } from "./styles";

interface Props {
  post: ListedPost;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const handleImage = () => {
    if (post.featured_image) {
      return <img src={`${post.featured_image}?w=200`} alt={post.title} />;
    } else {
      return (
        <img
          src="https://unitedfruitcompany.files.wordpress.com/2020/02/kurtz-phelan-600.jpg?w=300"
          alt={post.title}
        />
      );
    }
  };

  return (
    <Container>
      <Link href={`/${post.categories[0]}/${post.slug}`} passHref>
        <Card>
          <CardContent>
            <ImageContainer>{handleImage()}</ImageContainer>
            <Title>{post.title}</Title>
          </CardContent>
        </Card>
      </Link>
    </Container>
  );
};

export default PostCard;
