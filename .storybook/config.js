import { configure, addDecorator, getStorybook } from "@storybook/react";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { withOptions } from "@storybook/addon-options";
import "../styles/app.scss";

addDecorator(
  withBackgrounds([
    { name: "main", value: "#fffefc", default: true },
    { name: "header", value: "#e6e4e1" },
    { name: "dark", value: "#424242" }
  ])
);

addDecorator(
  withOptions({
    name: "Because NPM",
    url: "",
    goFullScreen: false,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: false
  })
);

const req = require.context("..", true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
