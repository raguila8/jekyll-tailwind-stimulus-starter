const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //context: path.resolve(__dirname, 'src'),
  //entry: "./packs/application.js",
  entry: path.resolve(__dirname, "_src/packs/application.js"),
  module: {
    rules: [
/*
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]-[hash].[ext]",
            outputPath: "assets/images"
          }
        }
      },
*/
      {
        test: /\.js$/, //using regex to tell babel exactly what files to transcompile
        exclude: /node_modules/, // files to be ignored
        use: {
          loader: 'babel-loader' // specify the loader
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // 4. Extract CSS into files
          "css-loader", //3. Turns css into commonjs,
          "postcss-loader", // 2. Processes CSS with PostCSS
          "sass-loader" //1. Turns sass into css
        ]
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: '_src/assets/images', to: 'images' },
      ],
    }),
    new CleanWebpackPlugin()
  ]
}
