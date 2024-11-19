import path from 'path';
import type { Configuration } from 'webpack';
import development from './config/webpack/development';
import production from './config/webpack/production';
import { BuildOptions, EnvVariables } from './config/webpack/types';

export default (env: EnvVariables): Configuration => {
  const options: BuildOptions = {
    mode: env.mode,
    port: env.port ?? 3000,
    path: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'src', 'index.html'),
    },
  };

  return env.mode === 'production' ? production(options) : development(options);
};
