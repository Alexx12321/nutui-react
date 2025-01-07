export interface IOptions {
  sourceLibrary: string[]
  targetLibrary: string
  iconMappings?: { [key: string]: string }
  exclude?: Array<string>
}
