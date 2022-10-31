import VuexPersist from 'vuex-persist'

export default ({ store }) => {
  new VuexPersist({
    key: 'magento2-model-generator',
  }).plugin(store)
}
