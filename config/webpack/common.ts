import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { Configuration } from 'webpack'
import { BuildOptions } from './types';

export default ({mode, path}: BuildOptions): Configuration => {
  const { entry, output, html } = path
  return {
    mode,
    entry,
    output: {
      path: output,
      filename: 'bundle.[contenthash].js',
      clean: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ["@babel/preset-react", { "runtime": "automatic" }],
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: html,
      }),
      new MiniCssExtractPlugin({
        filename: 'styles/style.[contenthash].css'
      })
    ]
  };
}