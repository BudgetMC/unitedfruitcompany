import { useRef } from "react";
import Image from "../Image";
import { XLg } from "react-bootstrap-icons";
import { useEffect } from "react";
import styles from './ResourceDisplay.module.css';

interface Props {
  image: string;
  alt: string;
  showCloserLook: boolean;
  setCloserLook: (arg: boolean) => void;
}

const CloserLook: React.FC<Props> = ({
  image,
  alt,
  showCloserLook,
  setCloserLook,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (showCloserLook) {
      closeButtonRef.current?.focus();
    }
  }, [showCloserLook]);

  return (
    <div
      className={styles.fullScreenContainer}
      onClick={() => setCloserLook(false)}
    >
      <div className={styles.fullScreenContent}>
        <button
          className={styles.closeButton}
          onClick={() => setCloserLook(false)}
          tabIndex={0}
          ref={closeButtonRef}
          role='button'
        >
          <XLg />
        </button>
        <Image
          alt={alt}
          height='100%'
          src={image}
          width='100%'
        />
      </div>
    </div>
  );
};

export default CloserLook;
