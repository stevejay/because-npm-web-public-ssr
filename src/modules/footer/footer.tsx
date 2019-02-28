import { stubTrue } from "lodash";
import React from "react";
import { Link } from "../../shared/routes";
import Logo from "../../shared/logo";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer} role="contentinfo">
    <div className={styles.logoContainer}>
      <Logo />
      <p className={styles.copyright}>&copy; 2018 Middle Engine Software Ltd</p>
    </div>
    <nav className={styles.nav}>
      <Link route="terms">
        <a>Terms</a>
      </Link>
      <Link route="privacy">
        <a>Privacy &amp; Cookies</a>
      </Link>
      <Link route="credits">
        <a>Credits</a>
      </Link>
    </nav>
  </footer>
);

export default React.memo(Footer, stubTrue);
