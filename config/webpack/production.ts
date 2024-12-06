import type { Configuration } from 'webpack';
import { BuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import common from './common';

export default (options: BuildOptions): Configuration => {
  const config = common(options);
  let { module } = config;
  const rules = [
    {
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
  ];

  if (module) {
    module.rules = module.rules ? [...module.rules, ...rules] : [...rules];
  } else {
    module = { rules };
  }

  return {
    ...config,
    module,
  };
};
