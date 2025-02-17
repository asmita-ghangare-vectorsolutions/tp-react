const { merge } = require("webpack-merge");
const path = require("path");
const PACKAGE = require("./package.json");
const TerserPlugin = require("terser-webpack-plugin");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { execSync } = require("child_process");

function getBranchName() {
  const branch = execSync("git rev-parse --abbrev-ref HEAD")
    .toString()
    .trim()
    .replace(/[/\\?%*:|"<>]/g, "-");
  return branch !== "main" ? "-" + branch : "";
}

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "teachpoint-web";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
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
        `../../dist/root-config/${PACKAGE.version}${getBranchName()}`,
      ),
    },
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      //new GitRevisionPlugin({branch: true}),
    ],
    externals: ["@vector-web-components/core"],
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
  });
};
