import { stubTrue } from "lodash";
import React from "react";
import { ScrollToTop } from "../shared/scroll";
import ContributingSection from "../modules/home/contributing-section";
import DiscoveringSection from "../modules/home/discovering-section";
import styles from "./index.module.scss";

const IndexPage = () => (
  <main className={styles.container}>
    <ScrollToTop />
    <DiscoveringSection />
    <ContributingSection />
  </main>
);

export default React.memo(IndexPage, stubTrue);
