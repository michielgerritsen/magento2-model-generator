<template>
  <div>
    <a href="#" @click.prevent="showModal = true">
      view/adminhtml/layout/{{ baseName }}_index.xml
    </a>

    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:title>view/adminhtml/layout/{{ baseName }}_index.xml</template>

      <template v-slot:default>{{ file }}</template>
    </Modal>
  </div>
</template>

<script type="ts">
import Vue from "vue"
import txt from 'raw-loader!~/assets/stubs/view/adminhtml/layout/index.xml.stub'
import Mustache from 'mustache'
import StateAware from "~/output/StateAware";

export default Vue.extend({
  data() {
    return {
      showModal: true
    }
  },

  computed: {
    baseName() {
      const stateAware = new StateAware(this.$store.state)
      return stateAware.baseName()
    },

    file() {
      const stateAware = new StateAware(this.$store.state)
      return Mustache.render(txt, {listingName: stateAware.listingName()});
    }
  }
})
</script>
