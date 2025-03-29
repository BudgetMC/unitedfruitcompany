import React, { useEffect, useRef, useMemo } from "react";
import { ListedPost } from "../../lib/types";
import styles from "./TimelineHeader.module.css";

interface Props {
  post: ListedPost;
  activePost: ListedPost;
  children: React.ReactElement[];
}

const TimelineHeader: React.FC<Props> = ({ post, activePost, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lines = React.Children.toArray(children);

  const isActive = useMemo(
    () => post.title === activePost.title,
    [post.title, activePost]
  )

  useEffect(() => {
    if (containerRef.current && isActive) {
      const elements = containerRef.current.children;
      Array.from(elements).forEach((el, index) => {
        el.animate(
          [
            { opacity: 0, transform: "translateY(-10px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: 500,
            easing: "ease-in-out",
            delay: index * 100,
            fill: "backwards"
          }
        );
      });
    }
  }, [isActive]);

  return (
    <div ref={containerRef}>
      {isActive &&
        lines.map((line, index) => (
          <span key={index} className={styles.header}>
            {line}
          </span>
        ))}
    </div>
  );
};

export default TimelineHeader;
