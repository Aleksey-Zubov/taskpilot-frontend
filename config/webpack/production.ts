import type { Configuration } from 'webpack'
import { BuildOptions } from './types';
import common from './common';

export default (options: BuildOptions): Configuration => common(options)