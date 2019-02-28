import { isEmpty } from "lodash";
import React from "react";
import styles from "./recent-packages.module.scss";
import { Link } from "../../../shared/routes";

type Props = {
  packages: string[] | null;
  onLinkClick: (event: React.MouseEvent<any>) => void;
};

const RecentPackages = ({ packages, onLinkClick }: Props) => {
  const filteredPackages = (packages || []).slice(1);
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Recently Viewed</h2>
      {isEmpty(filteredPackages) && <p>No recent packages</p>}
      {!isEmpty(filteredPackages) && (
        <ul className={styles.list}>
          {filteredPackages.map(nodeId => (
            // TODO onClick used to be on the Link
            <li key={nodeId} className={styles.listItem} onClick={onLinkClick}>
              <Link route="package" params={{ nodeId }}>
                <a>{nodeId}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RecentPackages;
