import {state} from "~/store/model";
import ColumnInterface from "~/interfaces/ColumnInterface";

export default class StateAware {
  protected state: any

  constructor(state: any) {
    this.state = state
  }

  moduleName() {
    return this.state.module.moduleName
  }

  vendorName() {
    return this.state.module.vendorName
  }

  modelName() {
    return this.state.model.name
  }

  baseName() {
    return (
      this.moduleName().toLowerCase() +
      '_' +
      this.vendorName().toLowerCase() +
      '_' +
      this.modelName().toLowerCase()
    )
  }

  moduleRegistration() {
    return `${this.moduleName()}_${this.vendorName()}`
  }

  listingName() {
    return `${this.baseName()}_listing`
  }

  columnsName() {
    return `${this.baseName()}_columns`
  }

  dataSource() {
    return `${this.listingName()}_data_source`
  }

  isNewButtonsEnabled() {
    return this.state.admingrid.newButton
  }

  baseRoute() {
    const moduleName = this.state.module.moduleName.toLowerCase()
    const vendorName = this.state.module.vendorName.toLowerCase()
    const modelName = this.state.model.name

    return `${moduleName}_${vendorName}/${modelName.toLowerCase()}/`
  }

  columns(): Array<ColumnInterface> {
    return this.state.table.columns
  }

  indexField(): string {
    return this.columns()[0].fieldName
  }

  isSticky(): boolean {
    return this.state.admingrid.sticky
  }

  isPaging(): boolean {
    return this.state.admingrid.paging
  }

  isBookmarks(): boolean {
    return this.state.admingrid.bookmarks
  }

  isSearch(): boolean {
    return this.state.admingrid.search
  }

  isMassActions(): boolean {
    return this.state.admingrid.massactions
  }
}
