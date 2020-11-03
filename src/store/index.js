import Vue from 'vue'
import Vuex from 'vuex'

import header from './modules/header'
import textSection from './modules/textSection'
import card from './modules/card'
import footer from './modules/footer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    header,
    textSection,
    card,
    footer
  }
})
