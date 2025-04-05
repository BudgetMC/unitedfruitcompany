import Link from "next/link";
import Image from "../Image";
import TypeWriterScript from "../TypewriterScript";
import styles from './HomeGrid.module.css';

interface Props {
  link: string;
  label: string;
  imagePath: string;
}

const HomeGrid: React.FC<Props> = ({ link, label, imagePath }) => {
  return (
    <Link href={link} passHref>
      <div className={styles.itemContainer}>
        <Image
          alt={label}
          height='100%'
          src={imagePath}
          width='100%'
        />
        <p>
          <TypeWriterScript text={label} averageDuration={1500} />
        </p>
      </div>
    </Link>
  );
};

export default HomeGrid;
