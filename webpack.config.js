var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
      title: '黎韶聪的网页',
      template:'./src/assets/index.html',
    })],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
};
