import AudioSecret from "../AudioSecret";
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>
        Site created by <a href="https://camden.lol">Camden Mecklem</a>.
      </p>
      <p>
        Content created by HIS394/HNR331, proctored by Dr. Jonathan T. Reynolds.
      </p>
      <AudioSecret child={<span>🍌</span>} />
    </footer>
  );
};

export default Footer;
