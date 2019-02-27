import { noop } from "lodash";
import React from "react";
import MockNextContext from "../../../../MockNextContext";
import { storiesOf } from "@storybook/react";
import RecentPackages from "../recent-packages";

storiesOf("Packages/RecentPackages", module)
  .add("No Packages", () => (
    <MockNextContext>
      <RecentPackages packages={[]} onLinkClick={noop} />
    </MockNextContext>
  ))
  .add("Some Packages", () => (
    <MockNextContext>
      <RecentPackages
        packages={[
          "formik",
          "react-final-form",
          "@some-scoped-package/redux-re-something"
        ]}
        onLinkClick={noop}
      />
    </MockNextContext>
  ));
