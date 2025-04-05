import React, { useRef } from "react";
import TimelineHeader from "./TimelineHeader";
import { ListedPost } from "../../lib/types";
import styles from './InfoBox.module.css';

interface Props {
  post: ListedPost;
  activePost: ListedPost;
}

const InfoBox: React.FC<Props> = ({ post, activePost }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.item}
      ref={itemRef}
    >
      <div className={styles.content}>
        <TimelineHeader post={post} activePost={activePost}>
          <h2 className={styles.infoHeader}>
            {post.title}
          </h2>
          <div
            className={styles.infoDescription}
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </TimelineHeader>
      </div>
    </div>
  );
};

export default InfoBox;
