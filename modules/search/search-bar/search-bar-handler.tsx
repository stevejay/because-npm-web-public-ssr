import React from "react";
import Router from "next/router";
import { graphql, MutateProps } from "react-apollo";
import { useAppBus } from "../../../shared/app-bus";
import { UpdateSearchParams } from "../graphql/mutations";
import SearchBar from "./search-bar";

type GraphQLVariables = {
  searchTerm: string;
};

type Props = MutateProps<any, GraphQLVariables>;

const SearchBarHandler = ({ mutate }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const appBus = useAppBus();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const finalSearchTerm = searchTerm.trim();
    if (!finalSearchTerm) {
      return;
    }
    mutate({ variables: { searchTerm: finalSearchTerm } }).then(() => {
      setSearchTerm("");
      appBus.searchBarBlur.emit();
      Router.push("/search");
      // if (!location.pathname.startsWith("/search")) {
      //   history.push("/search");
      // }
    });
  };

  return (
    <SearchBar
      searchTerm={searchTerm}
      onSearchTermChange={value => setSearchTerm(value)} // must be lambda
      onSubmit={handleSubmit}
    />
  );
};

export default graphql<any, GraphQLVariables>(UpdateSearchParams)(
  SearchBarHandler
);
