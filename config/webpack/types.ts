type Mode = 'production' | 'development' 

export interface Path {
  entry: string,
  output: string
  html: string
}

export interface EnvVariables {
  mode: Mode,
  port: number,
}

export interface BuildOptions extends EnvVariables{
  path: Path,
}