import StateAware from '~/output/StateAware'
import type GeneratesXmlInterface from '~/interfaces/GeneratesXmlInterface'

export default class ListingTop extends StateAware implements GeneratesXmlInterface {
  getXml(xml: XMLDocument): HTMLElement {
    const listingToolbar = xml.createElement('listingToolbar')
    listingToolbar.setAttribute('name', 'listing_top')

    if (this.isSticky()) {
      this.addSticky(xml, listingToolbar)
    }

    if (this.isPaging()) {
      this.addPaging(xml, listingToolbar)
    }

    if (this.isBookmarks()) {
      this.addBookmarks(xml, listingToolbar)
    }

    if (this.isSearch()) {
      this.addFilterSearch(xml, listingToolbar)
    }

    if (this.isMassActions()) {
      this.addMassActions(xml, listingToolbar);
    }

    return listingToolbar
  }

  private addMassActions(xml: XMLDocument, listingToolbar: HTMLElement) {
    const massaction = xml.createElement('massaction')
    massaction.setAttribute('name', 'listing_massaction')
    massaction.setAttribute('component', 'Magento_Ui/js/grid/tree-massactions')

    this.addSettings(xml, massaction)
    this.addDeleteAction(xml, massaction)

    listingToolbar.appendChild(massaction)
  }

  /**
   * Example:
   * ```
   * <action name="delete">
   *   <settings>
   *     <type>delete</type>
   *     <label translate="true">Delete</label>
   *     <url path="*\/*\/massDelete"/>
   *     <confirm>
   *       <title translate="true">Delete items</title>
   *       <message translate="true">Are you sure you want to delete the selected items?</message>
   *     </confirm>
   *   </settings>
   * </action>
   * ```
   *
   * @param xml
   * @param massaction
   * @private
   */
  private addDeleteAction(xml: XMLDocument, massaction: HTMLElement) {
    const action = xml.createElement('action')
    action.setAttribute('name', 'delete')
    const settings = xml.createElement('settings')
    action.appendChild(settings)
    massaction.appendChild(action)

    const type = xml.createElement('type')
    type.innerHTML = 'delete'
    settings.appendChild(type)

    const label = xml.createElement('label')
    label.setAttribute('translate', 'true')
    label.innerHTML = 'Delete'
    settings.appendChild(label)

    const url = xml.createElement('url')
    url.setAttribute('path', '*/*/massDelete')
    settings.appendChild(url)

    const confirm = xml.createElement('confirm')
    settings.appendChild(confirm)

    const title = xml.createElement('title')
    title.setAttribute('translate', 'true')
    title.innerHTML = 'Delete items'
    confirm.appendChild(title)

    const message = xml.createElement('message')
    message.setAttribute('translate', 'true')
    message.innerHTML = 'Are you sure you want to delete the selected items?'
    confirm.appendChild(message)
  }

  /**
   * Example:
   * ```
   * <settings>
   *   <selectProvider>vendorname_modulename_modelname_listing.vendorname_modulename_modelname_listing.vendorname_modulename_modelname_columns.ids</selectProvider>
   *   <indexField>id</indexField>
   * </settings>
   * ```
   *
   * @param xml
   * @param massaction
   * @private
   */
  private addSettings(xml: XMLDocument, massaction: HTMLElement) {
    const settings = xml.createElement('settings')
    massaction.appendChild(settings)

    const selectProvider = xml.createElement('selectProvider')
    selectProvider.innerHTML = `${this.listingName()}.${this.listingName()}.${this.columnsName()}.ids`
    settings.appendChild(selectProvider)

    const indexField = xml.createElement('indexField')
    indexField.innerHTML = this.indexField()
    settings.appendChild(indexField)
  }

  /**
   * Example:
   * ```
   * <filterSearch name="fulltext"/>
   * ```
   *
   * @param xml
   * @param listingToolbar
   * @private
   */
  private addFilterSearch(xml: XMLDocument, listingToolbar: HTMLElement) {
    const filterSearch = xml.createElement('filterSearch')
    filterSearch.setAttribute('name', 'fulltext')
    listingToolbar.appendChild(filterSearch)
  }

  /**
   * Example:
   * ```
   * <bookmark name="bookmarks"/>
   * ```
   *
   * @param xml
   * @param listingToolbar
   * @private
   */
  private addBookmarks(xml: XMLDocument, listingToolbar: HTMLElement) {
    const bookmark = xml.createElement('bookmark')
    bookmark.setAttribute('name', 'bookmarks')
    listingToolbar.appendChild(bookmark)
  }

  /**
   * Example:
   * ```
   * <paging name="listing_paging"/>
   * ```
   *
   * @param xml
   * @param listingToolbar
   * @private
   */
  private addPaging(xml: XMLDocument, listingToolbar: HTMLElement) {
    const paging = xml.createElement('paging')
    paging.setAttribute('name', 'listing_paging')
    listingToolbar.appendChild(paging)
  }

  /**
   * Example:
   * ```
   * <settings>
   *   <sticky>true</sticky>
   * </settings>
   * ```
   *
   * @param xml
   * @param listingToolbar
   * @private
   */
  private addSticky(xml: XMLDocument, listingToolbar: HTMLElement) {
    const settings = xml.createElement('settings')
    const sticky = xml.createElement('sticky')
    sticky.innerHTML = 'true'

    settings.appendChild(sticky)
    listingToolbar.appendChild(settings)
  }
}
