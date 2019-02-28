import Logo from "../logo";
import React from "react";
import { host } from "storybook-host";
import { storiesOf } from "@storybook/react";
import { MockNextContext } from "../../test-utils";

storiesOf("Logo", module)
  .addDecorator(
    host({
      align: "center middle",
      backdrop: "transparent"
    })
  )
  .add("Basic", () => (
    <MockNextContext>
      <Logo />
    </MockNextContext>
  ));
