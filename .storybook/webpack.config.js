const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [require.resolve("babel-preset-react-app")]
    }
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: {
          modules: true
        }
      },
      { loader: "sass-loader" }
    ],
    // loaders: ["style-loader", "css-loader?modules", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.resolve.extensions.push(".ts", ".tsx");

  // config.plugins.push(
  //   new ForkTsCheckerWebpackPlugin({
  //     async: false,
  //     checkSyntacticErrors: true,
  //     formatter: require("react-dev-utils/typescriptFormatter")
  //   })
  // );

  return config;
};
