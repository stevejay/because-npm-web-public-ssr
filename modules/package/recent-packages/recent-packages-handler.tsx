import React from "react";
import RecentPackages from "./recent-packages";
import { graphql, MutateProps, Query } from "react-apollo";
import { IRecentHistoryResult } from "../types";
import { RecentHistory } from "../graphql/queries";
import { UpdateRecentHistoryPackages } from "../graphql/mutations";
import { useAppBus } from "../../../shared/app-bus";

interface IGraphQLVariables {
  nodeId: string;
}

class RecentHistoryQuery extends Query<IRecentHistoryResult, object> {}

type OwnProps = {
  nodeId: string;
};

type AllProps = OwnProps & MutateProps<any, IGraphQLVariables>;

const RecentPackagesHandler = ({ mutate, nodeId }: AllProps) => {
  const appBus = useAppBus();

  React.useEffect(() => {
    console.log("RecentPackagesHandler::useEffect", nodeId);
    mutate({ variables: { nodeId } });
  }, [nodeId]);

  return (
    <RecentHistoryQuery query={RecentHistory}>
      {({ data }) => (
        <RecentPackages
          packages={data ? data.recentHistory.packages : null}
          onLinkClick={() => appBus.scrollToTop.emit()}
        />
      )}
    </RecentHistoryQuery>
  );
};

export default graphql<any, IGraphQLVariables>(UpdateRecentHistoryPackages)(
  React.memo(
    RecentPackagesHandler,
    (prevProps, nextProps) => prevProps.nodeId !== nextProps.nodeId
  )
);
