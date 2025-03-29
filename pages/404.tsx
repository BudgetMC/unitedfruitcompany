import type { NextPage } from "next";
import Link from "next/link";
import styles from '../styles/404.module.css';

const FourOhFour: NextPage = () => {
  return (
    <div className={styles.fullPageContainer}>
      <div className={styles.fullPageContainerContent}>
        <h1 className={styles.bigHeader}>🍌</h1>
        <h1 className={styles.bigHeader}>That&#39;s bananas!</h1>
        <h2 className={styles.smallHeader}>
          We couldn&#39;t find the page you&#39;re looking for.
        </h2>
        <p className={styles.homeLink}>
          <Link href="/">Go back home</Link>
        </p>
      </div>
    </div>
  );
};

export default FourOhFour;
