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

      columns.appendChild(new Column().getXml(xml, data))
    })

    this.addActions(xml, columns)

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

  private addActions(xml: XMLDocument, columns: HTMLElement) {
    /**
     * <actionsColumn name="actions" class="Magento\Cms\Ui\Component\Listing\Column\BlockActions">
     *   <settings>
     *     <indexField>block_id</indexField>
     *   </settings>
     * </actionsColumn>
     */

    const actionsColumn = xml.createElement('actionsColumn')
    actionsColumn.setAttribute('name', 'actions')
    actionsColumn.setAttribute(
        'class',
        `${this.vendorName()}\\${this.moduleName()}\\Ui\\Component\\Listing\\Column\\Actions`
  )

    const settings = xml.createElement('settings')
    actionsColumn.appendChild(settings)

    const indexField = xml.createElement('indexField')
    indexField.innerHTML = this.indexField()
    settings.appendChild(indexField)

    columns.appendChild(actionsColumn)
  }
}
