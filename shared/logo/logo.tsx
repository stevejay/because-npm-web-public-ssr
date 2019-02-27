import React from "react";
import { Link } from "../../server/routes";
import styles from "./logo.module.scss";

const Logo = () => (
  <h2 className={styles.heading} data-testid="site-name">
    <Link prefetch route="index">
      <a className={styles.link}>
        Because <span>NPM</span>
        <span className="screen-reader-only"> Homepage</span>
      </a>
    </Link>
  </h2>
);

export default Logo;
