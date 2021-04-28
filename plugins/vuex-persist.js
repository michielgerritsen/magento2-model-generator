import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'magento2-model-generator',
  }).plugin(store)
}
