const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_BASE = path.join(__dirname, 'src');

module.exports = {
  entry: [path.join(SRC_BASE, 'index.jsx')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [SRC_BASE, 'node_modules'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(SRC_BASE, 'index.html'),
    }),
  ],
};
