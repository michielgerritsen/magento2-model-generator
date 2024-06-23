import StateAware from '~/output/StateAware'
import type GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'
import type ColumnInterface from '~/interfaces/ColumnInterface'

export default class DbSchemaWhitelist extends StateAware implements GeneratesFileInterface {
  getContents(): string {
    interface Output {
      column: Record<string, boolean>;
      constaint: {
        PRIMARY: boolean;
      };
      search?: Record<string, boolean>;
    }

    const output: Output = {
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
    const result: Record<string, Output> = {};
    result[tableName] = output

    return JSON.stringify(result, null, 4)
  }

  getPath(): string {
    return 'etc/db_schema_whitelist.json'
  }

  isMergeable(): boolean {
    return false
  }
}
