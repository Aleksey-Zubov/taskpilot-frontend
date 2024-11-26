type Mode = 'production' | 'development';

export interface Path {
  [x: string]: any;
  entry: string;
  output: string;
  html: string;
}

interface Alias {
  src: string;
}

export interface EnvVariables {
  mode: Mode;
  port: number;
}

export interface BuildOptions extends EnvVariables {
  path: Path;
  alias: Alias;
}
