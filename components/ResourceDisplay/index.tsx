import { useState } from "react";
import { Post } from "../../lib/types";
import CloserLook from "./CloserLook";
import Image from "../Image";
import styles from './ResourceDisplay.module.css';

interface Props {
  post: Post;
}

const ResourceDisplay: React.FC<Props> = ({ post }) => {
  const [showCloserLook, setCloserLook] = useState(false);

  if (!post.featured_image) {
    throw new Error("Every picture post must have a featured image.");
  }

  const handleCloserLook = () => {
    if (showCloserLook && post.featured_image) {
      return (
        <CloserLook
          image={post.featured_image}
          alt={post.title}
          showCloserLook={showCloserLook}
          setCloserLook={setCloserLook}
        />
      );
    }
  };

  return (
    <>
      {handleCloserLook()}
      <div
        className={styles.content}
        onClick={() => setCloserLook(true)}
      >
        <Image
          alt={post.title}
          height='100%'
          src={`${post.featured_image}?w=600`}
          width='100%'
        />
      </div>
      <h1 className={styles.title}>
        {post.title}
      </h1>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  );
};

export default ResourceDisplay;
