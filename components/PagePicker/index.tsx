import React from "react";
import styles from './PagePicker.module.css';

interface Props {
  pageCount: number;
  setPage: (arg: number) => void;
}

const PagePicker: React.FC<Props> = ({ pageCount, setPage }) => {
  const displayPageButtons = () => {
    const buttons = [];
    for (let x = 1; x <= pageCount; x++) {
      buttons.push(
        <button
          className={styles.button}
          onClick={() => setPage(x)}
          key={x}
          role='button'
        >
          {x}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className={styles.container}>
      {displayPageButtons()}
    </div>
  );
};

export default PagePicker;
