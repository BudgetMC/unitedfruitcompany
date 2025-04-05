import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import styles from './Image.module.css';

interface Props {
  className?: string;
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

const Image: React.FC<Props> = ({ className, src, alt, width, height }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);

  const imageStyles: CSSProperties = useMemo(() => ({
    height,
    width,
    filter: `opacity(${imageLoaded ? 1 : 0})`
  }), [height, width, imageLoaded])

  useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.complete) {
        setImageLoaded(true);
      } else {
        setImageLoaded(false);
      }
    }
  }, [src]);

  return (
    <img
      alt={alt ? alt : ""}
      className={`${styles.image} ${className || ''}`}
      height={height}
      onLoad={() => setImageLoaded(true)}
      ref={imageRef}
      src={src}
      style={imageStyles}
      width={width}
    />
  );
};

export default Image;
