'use client';

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import styles from './NavOffset.module.css';

const NavOffset: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return (
      <div className={styles.offset}>
        {children}
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default NavOffset;
