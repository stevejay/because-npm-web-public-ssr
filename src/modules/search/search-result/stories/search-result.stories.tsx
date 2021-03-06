import React from "react";
import { storiesOf } from "@storybook/react";
import SearchResult from "../search-result";
import { MockNextContext } from "../../../../shared/test-utils";

function renderSearchResult(edgeCount: number) {
  return (
    <MockNextContext>
      <SearchResult
        key={edgeCount}
        result={{
          id: "111111",
          description: "Some description of this package",
          link: "https://test.com/111111",
          edgeCount
        }}
      />
    </MockNextContext>
  );
}

storiesOf("Search/SearchResult", module)
  .add("No Linked Packages", () => renderSearchResult(0))
  .add("One Linked Package", () => renderSearchResult(1))
  .add("Two Linked Packages", () => renderSearchResult(2))
  .add("Many Linked Packages", () => renderSearchResult(999));
