import { stubTrue } from "lodash";
import React from "react";
import { ScrollToTop } from "../src/shared/scroll";
import { ContributingSection, DiscoveringSection } from "../src/modules/home";
import styles from "./index.module.scss";

const IndexPage = () => (
  <main className={styles.container}>
    <ScrollToTop />
    <DiscoveringSection />
    <ContributingSection />
  </main>
);

export default React.memo(IndexPage, stubTrue);
