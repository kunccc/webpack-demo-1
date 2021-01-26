const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack demo",
      template: "src/assets/index.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass')
            }
          }
        ],
      },
    ],
  },
}