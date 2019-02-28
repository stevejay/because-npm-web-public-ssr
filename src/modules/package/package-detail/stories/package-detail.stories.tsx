import React from "react";
import { storiesOf } from "@storybook/react";
import PackageDetail from "../package-detail";
import MockNextContext from "../../../../../test-utils/MockNextContext";

storiesOf("Packages/PackageDetail", module)
  .add("Loading", () => (
    <MockNextContext>
      <PackageDetail nodeId="formik" loading node={null} />
    </MockNextContext>
  ))
  .add("Loaded", () => (
    <MockNextContext>
      <PackageDetail
        nodeId="formik"
        loading={false}
        node={{
          id: "formik",
          link: "https://test.com/some-page",
          description: "A description for this package that is not very long"
        }}
      />
    </MockNextContext>
  ));
