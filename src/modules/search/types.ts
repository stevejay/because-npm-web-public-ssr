import { INode, ISearchEdges } from "../../../typings";

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
