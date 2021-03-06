import { INode, IEdgeComment, ISearchEdges } from "../../../typings";

// edge search

export interface IEdgeSearchVariables {
  after: string | null;
  first: number;
  tailNodeId: string;
}

export interface IEdgeSearchResult {
  edgeSearch: ISearchEdges<IEdge>;
}

// edge comment search

export interface IEdgeCommentSearchVariables {
  after: string | null;
  edgeId: string;
  first: number;
}

export interface IEdgeCommentSearchResult {
  edgeCommentSearch: ISearchEdges<IEdgeComment>;
}

// recent history

export interface IRecentHistoryResult {
  recentHistory: {
    packages: string[];
  };
}

// node by name search

export interface INodeByNameSearchVariables {
  id: string;
}

export interface INodeByNameSearchResult {
  node: INode | null;
}

// node page search

export interface INodePageSearchVariables {
  after: string | null;
  id: string;
  first: number;
}

export interface INodePageSearchResult {
  edgeSearch: ISearchEdges<IEdge>;
  edgeCommentSearch: ISearchEdges<IEdgeComment>;
  node: INode;
}
