import React from "react";
import { storiesOf } from "@storybook/react";
import PackageDetail from "../package-detail";
import { MockNextContext } from "../../../../shared/test-utils";

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
