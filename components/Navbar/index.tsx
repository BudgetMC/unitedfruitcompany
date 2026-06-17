'use client';

import Image from "../Image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { List, X } from "react-bootstrap-icons";
import NavLinks from "./NavLinks";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [displayDropdown, toggleDropdown] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    toggleDropdown(false);
  }, [pathname]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      console.log(`
            Hungry? Grab a banana!

   _
  //\\
  V  \\
   \\  \\_
    \\,'.\`-.
     |\\ \`. \`.
     ( \\  \`. \`-.                        _,.-:\\
      \\ \\   \`.  \`-._             __..--' ,-';/
       \\ \`.   \`-.   \`-..___..---'   _.--' ,'/
        \`. \`.    \`-._        __..--'    ,' /
          \`. \`-_     \`\`--..''       _.-' ,'
            \`-_ \`-.___        __,--'   ,'
               \`-.__  \`----"""    __.-'
  hh                \`--..____..--'

    `);
    }
  }, []);

  const handleDropdownToggleIcon = () => {
    if (displayDropdown) {
      return <X onClick={() => toggleDropdown(!displayDropdown)} />;
    } else {
      return <List onClick={() => toggleDropdown(!displayDropdown)} />;
    }
  };

  const backgroundStyle = useMemo(() => ({
    backgroundColor: pathname === "/" ? "rgba(0, 0, 0, 0.6)" : "#3a3a3a"
  }), [pathname]);

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
