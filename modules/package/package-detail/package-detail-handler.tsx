import EdgeList from "../edge-list";
import PackageDetail from "./package-detail";
import React from "react";
import { ErrorMessage } from "../../../shared/content-state";
import { get } from "lodash";
import { INodeByNameSearchResult, INodeByNameSearchVariables } from "../types";
import { NodeByName } from "../graphql/queries";
import { Query } from "react-apollo";

class NodeByNameQuery extends Query<
  INodeByNameSearchResult,
  INodeByNameSearchVariables
> {}

type Props = {
  nodeId: string;
};

const PackageDetailHandler = ({ nodeId }: Props) => (
  <NodeByNameQuery query={NodeByName} variables={{ id: nodeId }}>
    {({ data, loading, error }) =>
      error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          <PackageDetail
            nodeId={nodeId}
            node={get(data, "node", null)}
            loading={loading}
          />
          <EdgeList nodeId={nodeId} />
        </>
      )
    }
  </NodeByNameQuery>
);

export default PackageDetailHandler;
