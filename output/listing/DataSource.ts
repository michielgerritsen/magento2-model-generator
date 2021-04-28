import StateAware from '~/output/StateAware'
import GeneratesXmlInterface from '~/interfaces/GeneratesXmlInterface'

export default class DataSource extends StateAware implements GeneratesXmlInterface {
  getXml(xml: XMLDocument): HTMLElement {
    const dataSource = xml.createElement('dataSource')
    dataSource.setAttribute('name', this.dataSource())
    dataSource.setAttribute('component', 'Magento_Ui/js/grid/provider')

    this.addSettings(xml, dataSource)
    this.addAclResource(xml, dataSource)
    this.addDataProvider(xml, dataSource)

    return dataSource
  }

  /**
   * Example:
   * ```
   * <settings>
   *   <updateUrl path="mui/index/render"/>
   *   <storageConfig>
   *     <param name="indexField" xsi:type="string">entity_id</param>
   *    </storageConfig>
   * </settings>
   * ```
   *
   * @param xml
   * @param dataSource
   * @private
   */
  private addDataProvider(xml: XMLDocument, dataSource: HTMLElement) {
    const dataProvider = xml.createElement('dataProvider')
    dataProvider.setAttribute('name', this.dataSource())
    dataProvider.setAttribute('class', 'Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\DataProvider')
    dataSource.appendChild(dataProvider)

    const settings = xml.createElement('settings')
    dataProvider.appendChild(settings)

    const requestFieldName = xml.createElement('requestFieldName')
    requestFieldName.innerHTML = this.indexField()
    settings.appendChild(requestFieldName)

    const primaryFieldName = xml.createElement('primaryFieldName')
    primaryFieldName.innerHTML = this.indexField()
    settings.appendChild(primaryFieldName)
  }

  /**
   * Example:
   * ```
   * <aclResource>VendorName_ModuleName::ModelName</aclResource>
   * ```
   *
   * @param xml
   * @param dataSource
   * @private
   */
  private addAclResource(xml: XMLDocument, dataSource: HTMLElement) {
    const aclResource = xml.createElement('aclResource')
    aclResource.innerHTML = `${this.moduleRegistration()}::${this.modelName()}`
    dataSource.appendChild(aclResource)
  }

  /**
   * Example:
   * ```
   * <dataProvider name="vendorname_modulename_modelname_listing_data_source" class="Magento\Framework\View\Element\UiComponent\DataProvider\DataProvider">
   *   <settings>
   *     <requestFieldName>entity_id</requestFieldName>
   *     <primaryFieldName>entity_id</primaryFieldName>
   *   </settings>
   * </dataProvider>
   * ```
   *
   * @param xml
   * @param dataSource
   * @private
   */
  private addSettings(xml: XMLDocument, dataSource: HTMLElement) {
    const settings = xml.createElement('settings')
    dataSource.appendChild(settings)

    const updateUrl = xml.createElement('updateUrl')
    updateUrl.setAttribute('path', 'mui/index/render')
    settings.appendChild(updateUrl)

    const storageConfig = xml.createElement('storageConfig')
    settings.appendChild(storageConfig)

    const param = xml.createElement('param')
    param.setAttribute('name', 'indexField')
    param.setAttribute('xsi:type', 'string')
    param.innerHTML = this.indexField()
    storageConfig.appendChild(param)
  }
}
