import React from "react";
import { PackageDetail, RecentPackages } from "../modules/package";
import styles from "./package.module.scss";

const PackagePage = () => (
  <main className={styles.container}>
    <section className={styles.section}>
      <PackageDetail />
    </section>
    <aside className={styles.aside}>
      <RecentPackages />
    </aside>
  </main>
);

export default PackagePage;
