import React from "react";
// import { PackageDetail, RecentPackages } from "../modules/package";
import { RecentPackages } from "../modules/package";
import styles from "./package.module.scss";
import { NextDocumentContext } from "next/document";

type Props = {
  nodeId: string;
};

const PackagePage = ({ nodeId }: Props) => (
  <main className={styles.container}>
    {/* <section className={styles.section}>
      <PackageDetail nodeId={nodeId} />
    </section> */}
    <aside className={styles.aside}>
      <RecentPackages nodeId={nodeId} />
    </aside>
  </main>
);

PackagePage.getInitialProps = async ({ query, res }: NextDocumentContext) => {
  // TODO fix any
  const nodeId = query.nodeId;
  if (!nodeId) {
    res!.statusCode = 404;
  }
  return { nodeId };
};

export default PackagePage;
