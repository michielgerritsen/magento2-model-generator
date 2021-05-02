export default interface TreeItemInterface {
  Name: String,
  Contents: String|null
  Children: TreeItemInterface|null
  CurrentPath: String
}
