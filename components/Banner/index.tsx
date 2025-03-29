import Link from "next/link";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import { useRouter } from "next/router";
import { getUpperPath } from "../../lib/common";
import styles from './Banner.module.css';

interface Props {
  header: string;
  previousSlug: string;
  nextSlug: string;
}

const Banner: React.FC<Props> = ({ header, previousSlug, nextSlug }) => {
  const router = useRouter();

  return (
    <div className={styles.fullWidthContainer}>
      <div className={styles.containerContent}>
        <p className={styles.desktopNavLink}>
          <Link href={`${getUpperPath(router.pathname)}/${previousSlug}`}>
            Previous
          </Link>
        </p>
        <div className={styles.mobileNavLink}>
          <Link
            href={`${getUpperPath(router.pathname)}/${previousSlug}`}
            passHref
          >
            <ArrowLeft />
          </Link>
        </div>
        <p className={styles.header}>
          <Link href={getUpperPath(router.pathname)} legacyBehavior>
            {header}
          </Link>
        </p>
        <p className={styles.desktopNavLink}>
          <Link href={`${getUpperPath(router.pathname)}/${nextSlug}`}>
            Next
          </Link>
        </p>
        <div className={styles.mobileNavLink}>
          <Link href={`${getUpperPath(router.pathname)}/${nextSlug}`} passHref>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
