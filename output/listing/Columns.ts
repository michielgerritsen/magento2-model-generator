import StateAware from '~/output/StateAware'
import type GeneratesXmlInterface from '~/interfaces/GeneratesXmlInterface'
import type ColumnInterface from '~/interfaces/ColumnInterface'
import Column from '~/output/listing/Column'

export default class Columns extends StateAware implements GeneratesXmlInterface {
  getXml(xml: XMLDocument): HTMLElement {
    const columns = xml.createElement('columns')
    columns.setAttribute('name', this.columnsName())

    if (this.isMassActions()) {
      this.addSelectionsColumn(xml, columns)
    }

    this.columns().forEach((data: ColumnInterface) => {
      if (!data.fieldName || !data.inputType) {
        return
      }

      columns.appendChild(new Column(this.state).getXml(xml, data))
    })

    return columns
  }

  private addSelectionsColumn(xml: XMLDocument, columns: HTMLElement) {
    const selectionsColumn = xml.createElement('selectionsColumn')
    selectionsColumn.setAttribute('name', 'ids')

    const settings = xml.createElement('settings')
    selectionsColumn.appendChild(settings)

    const indexField = xml.createElement('indexField')
    indexField.innerHTML = 'id'
    settings.appendChild(indexField)

    columns.appendChild(selectionsColumn)
  }
}
