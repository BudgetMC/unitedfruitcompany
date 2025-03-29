import React, { ReactNode } from "react";
import styles from './AudioSecret.module.css';

interface Props {
  child: ReactNode;
}

const Secret: React.FC<Props> = ({ child }) => {
  const secret =
    typeof Audio !== "undefined" ? new Audio("../audio/secret.ogx") : undefined;

  return (
    <div
      className={styles.container}
      onClick={async () => await secret?.play()}
    >
      {child}
    </div>
  );
};

export default Secret;
