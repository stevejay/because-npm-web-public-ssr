import { stubTrue } from "lodash";
import React from "react";
import { FaComment } from "react-icons/fa";
import { INode } from "../../../../typings/domain-typings";
import styles from "./search-result.module.scss";
import { Link } from "../../../shared/routes";

type Props = {
  result: INode;
};

const EARLY_STOPPING_COUNT = 100;

// TODO put link inside the h2

const SearchResult = ({ result }: Props) => (
  <div className={styles.container}>
    <Link route="package" params={{ nodeId: result.id }}>
      <a className={styles.link}>
        <h2 className={styles.name}>{result.id}</h2>
      </a>
    </Link>
    <p className={styles.description}>{result.description}</p>
    {!!result.edgeCount && (
      <p className={styles.edgeCount}>
        <FaComment className={styles.icon} />{" "}
        {result.edgeCount < EARLY_STOPPING_COUNT
          ? `linked to around ${result.edgeCount} ${
              result.edgeCount === 1 ? "package" : "packages"
            }`
          : "linked to many packages"}
      </p>
    )}
  </div>
);

export default React.memo(SearchResult, stubTrue);
