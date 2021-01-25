let HtmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "index.[contenthash].js"
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Development",
    template: "src/assets/index.html"
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}