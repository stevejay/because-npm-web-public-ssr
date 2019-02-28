import React from "react";
import { Message } from "../../../shared/content-state";
import NoResultsImage from "./no-results-image";

const NoResults = () => (
  <Message graphic={NoResultsImage}>
    No matching packages
    <br />
    found in the graph
  </Message>
);

export default NoResults;
