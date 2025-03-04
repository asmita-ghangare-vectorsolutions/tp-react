const { merge } = require("webpack-merge");
const path = require("path");
var PACKAGE = require("./package.json");
const TerserPlugin = require("terser-webpack-plugin");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { execSync } = require("child_process");

function getBranchName() {
  const branch = execSync("git rev-parse --abbrev-ref HEAD")
    .toString()
    .trim()
    .replace(/[/\\?%*:|"<>]/g, "-");
  return branch !== "main" ? "-" + branch : "";
}

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "teachpoint-web",
    projectName: "home",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              preamble: `/* Copyright ${new Date().getUTCFullYear()}, Vector Solutions. ${PACKAGE.name} ${PACKAGE.version} (${new Date().toUTCString()}) */`,
            },
          },
        }),
      ],
    },
    output: {
      path: path.resolve(
        __dirname,
        `../../dist/home/${PACKAGE.version}${getBranchName()}`,
      ),
      filename: `home.js`,
    },
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.(scss|sass|css)$/,
          exclude: /node_modules/,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    externals: ["@vector-web-components/core"],
  });
};
