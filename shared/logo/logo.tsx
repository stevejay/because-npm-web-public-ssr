import React from "react";
import Link from "next/link";
import styles from "./logo.module.scss";

const Logo = () => (
  <h2 className={styles.heading} data-testid="site-name">
    <Link prefetch href="/">
      <a className={styles.link}>
        Because <span>NPM</span>
        <span className="screen-reader-only"> Homepage</span>
      </a>
    </Link>
  </h2>
);

export default Logo;
