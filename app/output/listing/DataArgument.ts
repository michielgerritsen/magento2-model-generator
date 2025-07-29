import { createItem } from '~/functions/xml'
import StateAware from '~/output/StateAware'
import NewButton from '~/output/listing/NewButton'
import type GeneratesXmlInterface from '~/interfaces/GeneratesXmlInterface'

export default class DataArgument extends StateAware implements GeneratesXmlInterface {
  getXml(xml: XMLDocument): HTMLElement {
    const argument = xml.createElement('argument')
    argument.setAttribute('name', 'data')
    argument.setAttribute('xsi:type', 'array')

    const jsConfig = createItem(xml, 'js_config', 'array')

    // const provider = createItem(xml, 'provider', 'string', this.dataSource)
    const provider = createItem(
        xml,
        'provider',
        'string',
        `${this.listingName()}.${this.listingDataSource()}`
    )
    jsConfig.appendChild(provider)
    argument.appendChild(jsConfig)

    if (this.isNewButtonsEnabled()) {
      argument.appendChild(new NewButton().getXml(xml))
    }

    return argument
  }
}
