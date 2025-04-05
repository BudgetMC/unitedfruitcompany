import Image from "../Image";
import { Post } from "../../lib/types";
import TypewriterScript from "../TypewriterScript";
import styles from './Post.module.css';

interface Props {
  post: Post;
}

const PostContent: React.FC<Props> = ({ post }) => {
  return (
    <>
      <h1 className={styles.title}>
        <TypewriterScript text={post.title} />
      </h1>
      {post.featured_image && (
        <Image
          alt=""
          className={styles.image}
          src={`${post.featured_image}?w=600`}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  );
};

export default PostContent;
