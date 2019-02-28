import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, Observable } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { toIdValue } from "apollo-utilities";
import fetch from "isomorphic-unfetch";
import { get, merge, some } from "lodash";
import log from "loglevel";
import { resolvers as packageResolvers } from "../../src/modules/package";
import { resolvers as searchResolvers } from "../../src/modules/search";

// TODO try to get rid of initialState: any usage

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  (global as any).fetch = fetch;
}

let apolloClient: ApolloClient<object> | null = null;

function createCache(initialState: any) {
  const cache: any = new InMemoryCache({
    cacheRedirects: {
      Query: {
        node: (_, args) =>
          toIdValue(
            cache.config.dataIdFromObject({
              __typename: "Node",
              id: args.id
            })
          )
      }
    }
  });
  cache.restore(initialState || {});
  return cache;
}

function createRequestLink() {
  return new ApolloLink(
    (operation, forward) =>
      new Observable(observer => {
        let handle: any;
        Promise.all([operation])
          .then(() => {
            handle = forward
              ? forward(operation).subscribe({
                  complete: observer.complete.bind(observer),
                  error: observer.error.bind(observer),
                  next: observer.next.bind(observer)
                })
              : null;
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) {
            handle.unsubscribe();
          }
        };
      })
  );
}

function createErrorLink() {
  return onError(({ graphQLErrors, networkError }: any) => {
    if (
      (networkError && networkError.statusCode === 401) ||
      (graphQLErrors &&
        some(
          graphQLErrors,
          error => get(error, "extensions.exception.statusCode") === 401
        ))
    ) {
      if (apolloClient) {
        apolloClient.resetStore();
      }
    } else {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }: any) =>
          log.error(
            `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
              locations
            )}, Path: ${path}`
          )
        );
      }
      if (networkError) {
        log.error(`[Network error]: ${networkError.message || networkError}`);
      }
    }
  });
}

function createHttpLink() {
  return new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_SERVER_URI || ""
  });
}

function createApolloClient(initialState: any) {
  const httpLink = createHttpLink();
  const cache = createCache(initialState);
  const requestLink = createRequestLink();
  const clientStateLink = withClientState({
    ...merge(searchResolvers, packageResolvers),
    cache
  });
  const errorLink = createErrorLink();
  const client = new ApolloClient({
    connectToDevTools: process.browser,
    cache,
    link: ApolloLink.from([errorLink, requestLink, clientStateLink, httpLink])
  });
  return client;
}

export default function getApolloClient(initialState?: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)

  if (!process.browser) {
    return createApolloClient(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}
