import StateAware from '~/output/StateAware'
import type ColumnInterface from '~/interfaces/ColumnInterface'

export default class Column extends StateAware {
  getXml(xml: XMLDocument, data: ColumnInterface): HTMLElement {
    const column = xml.createElement('column')
    column.setAttribute('name', data.fieldName)

    const settings = xml.createElement('settings')
    column.appendChild(settings)

    const label = xml.createElement('label')
    label.setAttribute('translate', 'true')
    label.innerHTML = this.friendlyName(data)
    settings.appendChild(label)

    return column
  }
}
