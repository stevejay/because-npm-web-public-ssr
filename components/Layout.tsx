import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "./Layout.module.scss";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/list-class">
          <a>List Example</a>
        </Link>{" "}
        |{" "}
        <Link href="/list-fc">
          <a>List Example (as Functional Component)</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span className={styles.example}>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
