import AttributeInterface from '~/interfaces/AttributeInterface'

export function createItem(
  xml: XMLDocument,
  name: string,
  type: string,
  content?: string,
  options?: Array<AttributeInterface>
): HTMLElement {
  const item = xml.createElement('item')
  item.setAttribute('name', name)
  item.setAttribute('xsi:type', type)

  if (content) {
    item.innerHTML = content
  }

  if (options) {
    options.forEach((option) => {
      item.setAttribute(option.name, option.value)
    })
  }

  return item
}

export function prettifyXml(xml: string): string {
  const xmlDoc = new DOMParser().parseFromString(xml, 'application/xml')
  const xsltDoc = new DOMParser().parseFromString(
    `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
          <xsl:strip-space elements="*"/>
          <xsl:template match="para[content-style][not(text())]"> // change to just text() to strip space in text nodes
            <xsl:value-of select="normalize-space(.)"/>
          </xsl:template>
          <xsl:template match="node()|@*">
            <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>
          </xsl:template>
          <xsl:output indent="yes"/>
        </xsl:stylesheet>`,
    'application/xml'
  )

  const xsltProcessor = new XSLTProcessor()
  xsltProcessor.importStylesheet(xsltDoc)
  const resultDoc = xsltProcessor.transformToDocument(xmlDoc)
  return new XMLSerializer().serializeToString(resultDoc)
}
