import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';
import common from './common';
import { BuildOptions } from './types';

export default (options: BuildOptions): Configuration => {
  const config = common(options);
  let { module } = config;
  const { port } = options;
  const devServer: DevServerConfiguration = {
    port,
    open: true,
  };
  const rules = [
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ];

  if (module) {
    module.rules = module.rules ? [...module.rules, ...rules] : [...rules];
  } else {
    module = { rules };
  }

  return {
    ...config,
    devtool: 'inline-source-map',
    devServer,
    module,
  };
};
