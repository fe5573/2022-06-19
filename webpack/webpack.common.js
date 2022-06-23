/* eslint-disable @typescript-eslint/no-var-requires */
const { join, resolve } = require('path')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: join(__dirname, '../src/index.tsx'),
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          'babel-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, '../public/index.html'),
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
}
