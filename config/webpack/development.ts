
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from 'webpack'
import common from './common';
import { BuildOptions } from "./types";

export default (options: BuildOptions): Configuration => {
  const { port } = options
  return {
    ...common(options),
    devtool: 'inline-source-map',
    devServer: {
      port,
      open: true,
    }
  };
}