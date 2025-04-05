import Link from "next/link";
import Image from "../Image";
import styles from './Hero.module.css';

export enum Side {
  Right,
  Left,
}

interface Props {
  header: string;
  text: string;
  picturePath: string;
  pictureAltText: string;
  side: Side;
  link?: string;
}

const Hero: React.FC<Props> = ({
  header,
  text,
  picturePath,
  pictureAltText,
  side,
  link,
}) => {
  const textSection = (
    <div className={styles.textSide}>
      <h2>{link ? <Link href={link}>{header + " ➔"}</Link> : header}</h2>
      <p>{text}</p>
    </div>
  );

  const imageSection = (
    <div className={styles.picSide}>
      <Image
        alt={pictureAltText}
        height='100%'
        src={picturePath}
        width='100%'
      />
    </div>
  );
  return (
    <div className={styles.container}>
      {side === Side.Left ? textSection : imageSection}
      {side === Side.Right ? textSection : imageSection}
    </div>
  );
};

export default Hero;
