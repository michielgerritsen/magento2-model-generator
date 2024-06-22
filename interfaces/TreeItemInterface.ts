export default interface TreeItemInterface {
  Name: string
  Contents: string | null
  Children: TreeItemInterface | null
  CurrentPath: string
}
