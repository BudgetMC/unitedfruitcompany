import Image from "../Image";
import { Post } from "../../lib/types";
import TypewriterScript from "../TypewriterScript";
import { Title, ImageContainer, Content } from "./styles";

interface Props {
  post: Post;
}

const PostContent: React.FC<Props> = ({ post }) => {
  const handleImage = () => {
    if (post.featured_image) {
      return (
        <ImageContainer>
          <Image src={`${post.featured_image}?w=600`} alt="" />
        </ImageContainer>
      );
    }
  };

  return (
    <>
      <Title>
        <TypewriterScript text={post.title} />
      </Title>
      {handleImage()}
      <Content>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Content>
    </>
  );
};

export default PostContent;
