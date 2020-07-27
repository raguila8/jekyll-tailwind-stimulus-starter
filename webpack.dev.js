const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "_src/templates/packs.html",
      filename: "../_includes/packs.html",
      inject: false,
    }),
    new MiniCssExtractPlugin(
      { 
        filename: "[name].css" 
      }
    ),
  ],
  module: {
    rules: []
  },
});
