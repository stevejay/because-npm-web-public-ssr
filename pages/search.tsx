import React from "react";
import { graphql, DataProps, Query } from "react-apollo";
import { ErrorMessage, Loading } from "../src/shared/content-state";
import {
  NodeSearch,
  SearchParams,
  INodeSearchResult,
  INodeSearchVariables
} from "../src/modules/search";
import { SearchResultList } from "../src/modules/search";
import styles from "./search.module.scss";

class NodeSearchQuery extends Query<INodeSearchResult, INodeSearchVariables> {}

type Props = {
  searchParams: { searchTerm: string };
};

const SearchPageHandler = ({ data }: DataProps<Props>) => {
  const searchParams = data.searchParams;

  const searchTerm = searchParams ? searchParams.searchTerm : "";
  if (!searchTerm) {
    return (
      <main className={styles.container}>
        <SearchResultList results={null} />
      </main>
    );
  }

  return (
    <NodeSearchQuery
      query={NodeSearch}
      variables={{ after: null, first: 25, term: searchTerm }}
    >
      {({ loading, error, data }) => {
        if (error) {
          return <ErrorMessage error={error} />;
        } else if (loading || !data) {
          return <Loading delayMs={1000} />;
        } else {
          return (
            <main className={styles.container}>
              <SearchResultList
                results={data.nodeSearch ? data.nodeSearch.edges : null}
              />
            </main>
          );
        }
      }}
    </NodeSearchQuery>
  );
};

export default graphql<any, object, object, Props>(SearchParams)(
  SearchPageHandler
);
