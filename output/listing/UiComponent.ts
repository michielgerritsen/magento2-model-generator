import DataArgument from '~/output/listing/DataArgument'
import Settings from '~/output/listing/Settings'
import DataSource from '~/output/listing/DataSource'
import ListingTop from '~/output/listing/ListingTop'
import Columns from '~/output/listing/Columns'
import StateAware from '~/output/StateAware'
import { prettifyXml } from '~/functions/xml'
import GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'

export default class UiComponent extends StateAware implements GeneratesFileInterface{
  getContents(): String {
    const xml = document.implementation.createDocument(null, null, null)
    const listing = xml.createElement('listing')
    listing.setAttributeNS(
      'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:noNamespaceSchemaLocation',
      'urn:magento:module:Magento_Ui:etc/ui_configuration.xsd'
    )

    xml.appendChild(listing)

    listing.appendChild(new DataArgument(this.state).getXml(xml))
    listing.appendChild(new Settings(this.state).getXml(xml))
    listing.appendChild(new DataSource(this.state).getXml(xml))
    listing.appendChild(new ListingTop(this.state).getXml(xml))
    listing.appendChild(new Columns(this.state).getXml(xml))

    const output = new XMLSerializer().serializeToString(xml)
    return '<?xml version="1.0"?>' + '\n' + prettifyXml(output)
  }

  getPath(): String {
    return 'view/adminhtml/ui_component/' + this.listingName() + '.xml'
  }

  isMergeable(): Boolean {
    return true
  }
}
