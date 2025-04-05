import Image from "../Image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { List, X } from "react-bootstrap-icons";
import NavLinks from "./NavLinks";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [displayDropdown, toggleDropdown] = useState(false);

  const router = useRouter();

  // Close the mobile dropdown menu after the user clicks through to another page.
  useEffect(() => {
    toggleDropdown(false);
  }, [router.pathname]);

  const handleDropdownToggleIcon = () => {
    if (displayDropdown) {
      return <X onClick={() => toggleDropdown(!displayDropdown)} />;
    } else {
      return <List onClick={() => toggleDropdown(!displayDropdown)} />;
    }
  };

  const backgroundStyle = useMemo(() => ({
    backgroundColor: router.pathname === "/" ? "rgba(0, 0, 0, 0.6)" : "#3a3a3a"
  }), [router.pathname])

  return (
    <div
      className={styles.nav}
      style={backgroundStyle}
    >
      <div className={styles.navContainer}>
        <div>
          <Link href="/" passHref>
            <Image
              src="https://unitedfruitcompany.files.wordpress.com/2020/02/kurtz-phelan-600.jpg?w=200"
              height="56"
              width="111"
              alt="Back to home"
            />
          </Link>
        </div>
        <nav className={styles.navRight}>
          <NavLinks />
        </nav>
        <div className={styles.dropdownToggle}>
          {handleDropdownToggleIcon()}
        </div>
        {displayDropdown ? (
          <nav
            className={styles.mobileDropdown}
            style={backgroundStyle}
          >
            <NavLinks />
          </nav>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
