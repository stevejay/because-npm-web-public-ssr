import React from "react";
import { Router } from "../../../shared/routes";
import { useAppBus } from "../../../shared/app-bus";
import Button, { ButtonType } from "../../../shared/button";
import Section from "../section";
import styles from "./discovering-section.module.scss";
import GraphImage from "./graph-image";

const DiscoveringSection = () => {
  const appBus = useAppBus();

  const handleClick = () => {
    appBus.searchBarFocus.emit();
    Router.pushRoute("search");
  };

  return (
    <Section className={styles.section}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h1 className={styles.header}>
            Discover alternative packages in the npm registry
          </h1>
          <p className={styles.paragraph}>
            View alternatives to the packages you know and why people have made
            the switch.
          </p>
          <Button
            type={ButtonType.Primary}
            className={styles.button}
            onClick={handleClick}
          >
            Search for a package
          </Button>
        </div>
        <div className={styles.column} aria-hidden="true" role="presentation">
          <GraphImage className={styles.image} />
        </div>
      </div>
    </Section>
  );
};

export default DiscoveringSection;
