import StateAware from '~/output/StateAware'
import GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'
import ColumnInterface from '~/interfaces/ColumnInterface'

export default class DbSchemaWhitelist extends StateAware implements GeneratesFileInterface {
  getContents(): String {
    const output: any = {
      column: {},
      constaint: {
        PRIMARY: true,
      },
    }

    this.columns().forEach((data: ColumnInterface) => {
      if (!data.fieldName || !data.inputType) {
        return
      }

      output.column[data.fieldName] = true
    })

    if (this.isSearch()) {
      const searchKey = this.getIndexField()
      output.search = {}
      output.search[searchKey] = true
    }

    const tableName = this.tableName()
    const result: any = {}
    result[tableName] = output

    return JSON.stringify(result, null, 4)
  }

  getPath(): String {
    return 'etc/db_schema_whitelist.json'
  }
}
