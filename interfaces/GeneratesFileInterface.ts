export default interface GeneratesFileInterface {
  getPath(): string

  getContents(): string

  isMergeable(): boolean
}
