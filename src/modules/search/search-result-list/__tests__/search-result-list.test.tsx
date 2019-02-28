import React from "react";
import { render } from "react-testing-library";
import SearchResultList from "../search-result-list";
import { ISearchNode } from "../../../../../typings/graphql-typings";
import { INode } from "../../../../../typings/domain-typings";
import MockNextContext from "../../../../../test-utils/MockNextContext";

function renderSearchResultList(results: Array<ISearchNode<INode>> | null) {
  return render(
    <MockNextContext>
      <SearchResultList results={results} />
    </MockNextContext>
  );
}

test("handles search results", async () => {
  const { getByText, queryByText } = renderSearchResultList([
    {
      node: {
        id: "search-result-1",
        description: "The description",
        link: "https://test.com",
        edgeCount: 1
      },
      cursor: "cursor-1"
    }
  ]);
  expect(getByText(/search-result-1/i)).toBeInTheDocument();
  expect(queryByText(/No matching packages/i)).toBeFalsy();
  expect(queryByText(/Enter a search term above/i)).toBeFalsy();
});

test("handles empty search results", async () => {
  const { getByText, queryByText } = renderSearchResultList([]);
  expect(getByText(/No matching packages/i)).toBeInTheDocument();
  expect(queryByText(/search-result-1/i)).toBeFalsy();
  expect(queryByText(/Enter a search term above/i)).toBeFalsy();
});

test("handles null search results", async () => {
  const { getByText, queryByText } = renderSearchResultList(null);
  expect(
    getByText(/Enter a search term above ?to see results here/i)
  ).toBeInTheDocument();
  expect(queryByText(/search-result-1/i)).toBeFalsy();
  expect(queryByText(/No matching packages/i)).toBeFalsy();
});
