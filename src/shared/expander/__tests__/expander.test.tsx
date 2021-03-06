import React from "react";
import { render } from "react-testing-library";
import Expander from "../expander";
import userEvent from "user-event";

function renderExpander(expandedOnMount: boolean) {
  return render(
    <Expander expandedOnMount={expandedOnMount} headerContent="Header text">
      <div data-testid="child" />
    </Expander>
  );
}

test("header renders with expected content", async () => {
  const { getByLabelText, getByText } = renderExpander(false);
  const heading = getByText(/Header text/i);
  expect(heading.tagName).toEqual("H2");
  expect(getByLabelText(/Show content/i)).toBeInTheDocument();
});

test("can be opened", async () => {
  const { getByLabelText, queryByTestId } = renderExpander(false);
  expect(queryByTestId("child")).toBeNull();
  userEvent.click(getByLabelText(/Show content/i));
  expect(queryByTestId("child")).not.toBeNull();
  expect(getByLabelText(/Hide content/i)).toBeInTheDocument();
});

test("can be closed", async () => {
  const { getByLabelText, queryByTestId } = renderExpander(true);
  expect(queryByTestId("child")).not.toBeNull();
  userEvent.click(getByLabelText(/Hide content/i));
  expect(queryByTestId("child")).toBeNull();
  expect(getByLabelText(/Show content/i)).toBeInTheDocument();
});
