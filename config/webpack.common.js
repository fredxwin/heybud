const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const paths = require("./paths")

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.jsx"],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: "assets",
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from template.ejs
    new HtmlWebpackPlugin({
      title: "Heybud | Finances made easy",
      favicon: paths.src + "/assets/favicon.png",
      template: paths.src + "/index.html",
      filename: "index.html", // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      { test: /\.js$|jsx/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.(?:png|jpg|jpeg|svg)$/i, type: "asset/resource" },
    ],
  },

  resolve: {
    modules: [paths.src, "node_modules"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": paths.src,
    },
  },
}
