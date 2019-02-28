import { stubTrue } from "lodash";
import React from "react";
import { IEdge } from "../../../typings/domain-typings";
import Expander from "../../../shared/expander";
import EdgeCommentList from "../edge-comment-list";
import { Link } from "../../../server/routes";

type Props = {
  isFirst: boolean;
  entity: IEdge;
};

const Edge = ({ isFirst, entity }: Props) => {
  const headerContent = (
    <span>
      to{" "}
      <Link route="package" params={{ nodeId: entity.headNodeId }}>
        <a>{entity.headNodeId}</a>
      </Link>{" "}
      because&hellip;
    </span>
  );

  return (
    <Expander expandedOnMount={isFirst} headerContent={headerContent}>
      <EdgeCommentList edgeId={entity.id} />
    </Expander>
  );
};

export default React.memo(Edge, stubTrue);
