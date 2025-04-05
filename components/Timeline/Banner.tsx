import { ChevronDown } from "react-bootstrap-icons";
import styles from './Banner.module.css';

interface Props {
  scrollToContent: () => void;
}

const Banner: React.FC<Props> = ({ scrollToContent }) => {
  return (
    <div className={styles.container}>
      <div /> {/* empty div so the below div is centered */}
      <div>
        <h1>The Story of the United Fruit Company</h1>
        <p>You can use the arrow keys to scroll.</p>
      </div>
      <button
        className={styles.seeMoreButton}
        onClick={() => scrollToContent()}
        role='button'
      >
        <span>Explore</span>
        <ChevronDown />
      </button>
    </div>
  );
};

export default Banner;
