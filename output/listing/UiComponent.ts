import DataArgument from '~/output/listing/DataArgument'
import Settings from '~/output/listing/Settings'
import DataSource from '~/output/listing/DataSource'
import ListingTop from '~/output/listing/ListingTop'
import Columns from '~/output/listing/Columns'
import StateAware from '~/output/StateAware'
import { prettifyXml } from '~/functions/xml'
import type GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'

export default class UiComponent extends StateAware implements GeneratesFileInterface{
  getContents(): string {
    const xml = document.implementation.createDocument(null, null, null)
    const listing = xml.createElement('listing')
    listing.setAttributeNS(
      'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:noNamespaceSchemaLocation',
      'urn:magento:module:Magento_Ui:etc/ui_configuration.xsd'
    )

    xml.appendChild(listing)

    listing.appendChild(new DataArgument().getXml(xml))
    listing.appendChild(new Settings().getXml(xml))
    listing.appendChild(new DataSource().getXml(xml))
    listing.appendChild(new ListingTop().getXml(xml))
    listing.appendChild(new Columns().getXml(xml))

    const output = new XMLSerializer().serializeToString(xml)
    return '<?xml version="1.0"?>' + '\n' + prettifyXml(output)
  }

  getPath(): string {
    return 'view/adminhtml/ui_component/' + this.listingName() + '.xml'
  }

  isMergeable(): boolean {
    return true
  }
}
