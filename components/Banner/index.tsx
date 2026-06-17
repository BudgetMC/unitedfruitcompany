'use client';

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import { usePathname } from "next/navigation";
import { getUpperPath } from "../../lib/common";
import styles from './Banner.module.css';

interface Props {
  header: string;
  previousSlug: string;
  nextSlug: string;
}

const Banner: React.FC<Props> = ({ header, previousSlug, nextSlug }) => {
  const pathname = usePathname();

  return (
    <div className={styles.fullWidthContainer}>
      <div className={styles.containerContent}>
        <p className={styles.desktopNavLink}>
          <Link href={`${getUpperPath(pathname)}/${previousSlug}`}>
            Previous
          </Link>
        </p>
        <div className={styles.mobileNavLink}>
          <Link href={`${getUpperPath(pathname)}/${previousSlug}`} passHref>
            <ArrowLeft />
          </Link>
        </div>
        <p className={styles.header}>
          <Link href={getUpperPath(pathname)}>
            {header}
          </Link>
        </p>
        <p className={styles.desktopNavLink}>
          <Link href={`${getUpperPath(pathname)}/${nextSlug}`}>
            Next
          </Link>
        </p>
        <div className={styles.mobileNavLink}>
          <Link href={`${getUpperPath(pathname)}/${nextSlug}`} passHref>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
