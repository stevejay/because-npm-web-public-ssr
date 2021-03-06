import React from "react";
import { IoIosSearch } from "react-icons/io";
import { storiesOf } from "@storybook/react";
import Message from "../message";
import host from "./host";

storiesOf("ContentState/Message", module)
  .addDecorator(host)
  .add("Basic", () => <Message>Some Message</Message>)
  .add("With Icon", () => <Message icon={IoIosSearch}>Some Message</Message>);
