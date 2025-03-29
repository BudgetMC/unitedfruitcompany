import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import styles from './TagDisplay.module.css';

interface Props {
  display: boolean;
}

const TagToggle: React.FC<Props> = ({ display }) => {
  const getIcon = () => {
    if (display) {
      return <CaretUpFill />;
    } else {
      return <CaretDownFill />;
    }
  };

  return (
    <button
      className={styles.toggleButton}
      role='button'
    >
      {getIcon()}
    </button>
  );
};

export default TagToggle;
