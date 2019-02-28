const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

module.exports = withTypescript(
  withCSS(
    withSass({
      cssModules: true,
      webpack(config, options) {
        // TODO get URI from env:
        config.plugins.push(
          new webpack.EnvironmentPlugin({
            REACT_APP_GRAPHQL_SERVER_URI:
              "https://api.becausenpm.com/search/graphql"
          })
        );

        // Silence mini-css-extract-plugin generating lots of warnings for CSS ordering.
        // We use CSS modules that should not care for the order of CSS imports, so we
        // should be safe to ignore these.
        // See: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
        config.plugins.push(
          new FilterWarningsPlugin({
            exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
          })
        );

        return config;
      }
    })
  )
);
