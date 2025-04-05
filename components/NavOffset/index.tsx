// This component is a way to keep content from falling under the navbar.
// It needs a bit of logic built-in because we want the homepage background
// to fall under the navbar for a cool transparency effect, so we don't render
// this component on the homepage.

import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from './NavOffset.module.css';

const NavOffset: React.FC<{ child: ReactNode }> = ({ child }) => {
  const router = useRouter();

  if (router.pathname !== "/") {
    return (
      <div
        className={styles.offset}
      >
        {child}
      </div>
    );
  } else {
    return <>{child}</>;
  }
};

export default NavOffset;
