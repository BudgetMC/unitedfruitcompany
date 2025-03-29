import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListedPost } from "../../lib/types";
import styles from './TimelineHeader.module.css';

interface Props {
  post: ListedPost;
  activePost: ListedPost;
  children: React.ReactElement[];
}

const TimelineHeader: React.FC<Props> = ({ post, activePost, children }) => {
  const [isActive, setIsActive] = useState(false);
  const lines = React.Children.toArray(children);

  useEffect(() => {
    setIsActive(post.title === activePost.title);
  }, [activePost, post.title]);

  return (
    <>
      <AnimatePresence>
        {isActive &&
          lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <span className={styles.header}>{line}</span>
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  );
};

export default TimelineHeader;
