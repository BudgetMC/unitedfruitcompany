import Image from "../Image";
import { Post } from "../../lib/types";
import TypewriterScript from "../TypewriterScript";
import styles from './Post.module.css';

interface Props {
  post: Post;
}

const PostContent: React.FC<Props> = ({ post }) => {
  const handleImage = () => {
    if (post.featured_image) {
      return (
        <div className={styles.imageContainer}>
          <Image src={`${post.featured_image}?w=600`} alt="" />
        </div>
      );
    }
  };

  return (
    <>
      <h1 className={styles.title}>
        <TypewriterScript text={post.title} />
      </h1>
      {handleImage()}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  );
};

export default PostContent;
