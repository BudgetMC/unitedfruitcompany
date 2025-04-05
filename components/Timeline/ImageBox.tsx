import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ListedPost } from "../../lib/types";
import styles from './ImageBox.module.css';

interface Props {
  activePost: ListedPost;
}

const ImageBox: React.FC<Props> = ({ activePost }) => {
  const [brightness, setBrightness] = useState(0);
  const [currentImage, setCurrentImage] = useState(activePost.featured_image);

  // Keep track of whether we're waiting for a timeout to finish.
  // This prevents flashing images when the user quickly scrolls.
  const timeoutRef = useRef<null | number>(null);

  useEffect(() => {
    const transition = () => {
      if (activePost.featured_image) {
        setCurrentImage(activePost.featured_image);
        setBrightness(1);
      }
    };

    // Clear any existing timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setBrightness(0);
    timeoutRef.current = window.setTimeout(() => transition(), 400);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [activePost]);

  const styleObj = useMemo(() => ({
    backgroundImage: `url(${currentImage}?w=800)`,
    filter: `brightness(${brightness})`
  }), [currentImage, brightness])

  return (
    <div
      className={styles.box}
      style={styleObj}
    >
      <Link href={`/timeline/${activePost.slug}`}>See more &#10132;</Link>
    </div>
  );
};

export default ImageBox;
