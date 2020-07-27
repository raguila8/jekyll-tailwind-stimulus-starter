const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main-[contentHash].js",
    //path: path.resolve(__dirname, "dist")
    path: path.resolve(__dirname, "assets"),
    publicPath: "/assets/",
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        //template: "./index.html",
        template: "_src/templates/packs.html",
        filename: "../_includes/packs.html",
        inject: false,
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
    ]
  },
  module: {
    rules: []
  },
  plugins: [
    new MiniCssExtractPlugin(
      { 
        filename: "[name]-[contentHash].css" 
      }
    ),
  ]
});
