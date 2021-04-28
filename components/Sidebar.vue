<template>
  <div>
    <GeneratedLayoutFile />
    <GeneratedListing />
  </div>
</template>

<script type="ts">
import Vue from "vue";
import StateAware from "~/output/StateAware";

export default Vue.extend({
  computed: {
    listingName() { return new StateAware(this.$store.state).listingName() }
  }
})
</script>
