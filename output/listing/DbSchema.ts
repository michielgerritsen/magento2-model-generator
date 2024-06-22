import StateAware from '~/output/StateAware'
import type GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'
import { prettifyXml } from '~/functions/xml'
import type ColumnInterface from '~/interfaces/ColumnInterface'

export default class DbSchema extends StateAware implements GeneratesFileInterface {
  getContents(): string {
    const xml = document.implementation.createDocument(null, null, null)
    const schema = xml.createElement('schema')
    schema.setAttributeNS(
      'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:noNamespaceSchemaLocation',
      'urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd'
    )

    xml.appendChild(schema)

    const table = xml.createElement('table')
    table.setAttribute('name', this.tableName())
    table.setAttribute('engine', 'innodb')
    table.setAttribute('comment', this.modelName().toUpperCase() + 's')
    schema.appendChild(table)

    this.addColumns(xml, table)

    if (this.isSearch()) {
      this.addSearchField(xml, table)
    }

    const output = new XMLSerializer().serializeToString(xml)
    return '<?xml version="1.0"?>' + '\n' + prettifyXml(output)
  }

  getPath(): string {
    return 'etc/db_schema.xml'
  }

  isMergeable(): boolean {
    return false
  }

  private addColumns(xml: XMLDocument, table: HTMLTableElement) {
    let indexField: ColumnInterface | boolean = false

    this.columns().forEach((data: ColumnInterface) => {
      if (!data.fieldName || !data.inputType) {
        return
      }

      if (data.fieldName === this.indexField()) {
        indexField = data
        this.addIndexField(xml, table, data)
        return
      }

      const column = xml.createElement('column')
      column.setAttribute('name', data.fieldName)
      column.setAttribute('xsi:type', data.inputType)
      column.setAttribute('comment', data.fieldName)
      column.setAttribute('nullable', 'true')

      table.appendChild(column)
    })

    if (indexField) {
      this.addConstraint(xml, table, indexField)
    }
  }

  private addConstraint(xml: XMLDocument, table: HTMLTableElement, data: ColumnInterface) {
    const constraint = xml.createElement('constraint')
    constraint.setAttribute('xsi:type', 'primary')
    constraint.setAttribute('referenceId', 'PRIMARY')

    table.appendChild(constraint)

    const constraintColumn = xml.createElement('column')
    constraintColumn.setAttribute('name', data.fieldName)

    constraint.appendChild(constraintColumn)
  }

  private addIndexField(
    xml: XMLDocument,
    table: HTMLTableElement,
    data: ColumnInterface
  ) {
    const column = xml.createElement('column')
    column.setAttribute('name', data.fieldName)
    column.setAttribute('xsi:type', data.inputType)
    column.setAttribute('comment', data.fieldName)
    column.setAttribute('nullable', 'true')
    column.setAttribute('identity', 'true')
    column.setAttribute('unsigned', 'true')
    column.setAttribute('padding', '10')

    table.appendChild(column)
  }

  private addSearchField(xml: XMLDocument, table: HTMLTableElement) {
    const textColumns = this.columns().filter((data: ColumnInterface) => {
      return data.inputType === 'varchar' || data.inputType === 'text';
    });

    if (textColumns.length === 0) {
      return;
    }

    const index = xml.createElement('index')
    index.setAttribute('referenceId', this.getIndexField())
    index.setAttribute('indexType', 'fulltext')
    table.appendChild(index)

    textColumns.forEach((data: ColumnInterface) => {
      const column = xml.createElement('column')
      column.setAttribute('name', data.fieldName)
      index.appendChild(column)
    })
  }
}
