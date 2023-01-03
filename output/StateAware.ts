import {state} from "~/store/model";
import ColumnInterface from "~/interfaces/ColumnInterface";
import {AnyNode} from "postcss";

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

  modelName(): String {
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
    return this.state.table.columns.filter((column: ColumnInterface) => column.fieldName !== '')
  }

  formattedColumns(): Array<Object> {
    return this.columns().map((column) => {
      return {
        fieldName: column.fieldName,
        inputType: column.inputType,
        fieldNameUppercase: column.fieldName.toUpperCase(),
        functionName: this.toPascalCase(column.fieldName),
        phpType: this.inputTypeToPhpType(column.inputType),
      }
    })
  }

  inputTypeToPhpType(inputType: string): string {
    switch (inputType) {
      case 'text':
      case 'textarea':
      case 'select':
      case 'multiselect':
      case 'boolean':
      case 'date':
      case 'datetime':
      case 'time':
      case 'file':
        return 'string'
      case 'int':
        return 'int'
      case 'decimal':
        return 'float'
      default:
        return 'string'
    }
  }

  toPascalCase(input: string): string {
    input = input.replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '')
    )

    return input.charAt(0).toUpperCase() + input.slice(1)
  }

  tableName(): string {
    return this.state.model.tableName
  }

  indexField(): string {
    return this.columns()[0].fieldName
  }

  isAdmingrid(): boolean {
    return this.state.admingrid.enabled
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

  getIndexField(): string {
    return `${this.tableName()}_${this.indexField()}`.toUpperCase()
  }

  variableName(): string {
    const modelName = this.modelName()
    const firstLetter = modelName.charAt(0).toLowerCase()

    return firstLetter + modelName.slice(1)
  }

  includeModuleRegistration() {
    return this.state.module.includeModuleRegistration
  }

  fileContext() {
    return {
      ModuleName: this.moduleName(),
      VendorName: this.vendorName(),
      ModelName: this.modelName(),
      TableName: this.tableName(),
      IndexField: this.indexField(),
      ListingName: this.listingName(),
      VariableName: this.variableName(),
      Columns: this.formattedColumns(),
    }
  }
}
