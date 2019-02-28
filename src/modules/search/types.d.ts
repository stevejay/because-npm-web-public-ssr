import { INode } from "../../typings/domain-typings";
import { ISearchEdges } from "../../typings/graphql-typings";

// node search

export interface INodeSearchVariables {
  after: string | null;
  first: number;
  term: string;
}

export interface INodeSearchResult {
  nodeSearch: ISearchEdges<INode>;
}

export interface IAutocompleteNodeSearchResult {
  autocompleteNodeSearch: {
    nodes: Array<INode>;
  };
}
