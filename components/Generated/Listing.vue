<template>
  <div>
    <a href="#" @click.prevent="showModal = true">
      view/adminhtml/ui_component/{{ listingName }}.xml
    </a>

    <Modal v-if="showModal" @close="showModal = false">
      <template #title>listing.xml</template>

      <template #default>{{ xml }}</template>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DataArgument from '~/output/listing/DataArgument'
import Settings from '~/output/listing/Settings'
import Columns from '~/output/listing/Columns'
import DataSource from '~/output/listing/DataSource'
import ListingTop from '~/output/listing/ListingTop'
import StateAware from '~/output/StateAware'

export default Vue.extend({
  data() {
    return {
      showModal: false,
    }
  },

  computed: {
    listingName() {
      return new StateAware(this.$store.state).listingName()
    },

    xml() {
      const xml = document.implementation.createDocument(null, null, null)
      const listing = xml.createElement('listing')
      listing.setAttributeNS(
        'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:noNamespaceSchemaLocation',
        'urn:magento:module:Magento_Ui:etc/ui_configuration.xsd'
      )

      xml.appendChild(listing)

      listing.appendChild(new DataArgument(this.$store.state).getXml(xml))
      listing.appendChild(new Settings(this.$store.state).getXml(xml))
      listing.appendChild(new DataSource(this.$store.state).getXml(xml))
      listing.appendChild(new ListingTop(this.$store.state).getXml(xml))
      listing.appendChild(new Columns(this.$store.state).getXml(xml))

      const output = new XMLSerializer().serializeToString(xml)
      return '<?xml version="1.0"?>' + '\n' + this.prettifyXml(output)
    },
  },

  methods: {
    prettifyXml(xml: string) {
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
    },
  },
})
</script>
