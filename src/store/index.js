import Vue from 'vue'
import Vuex from 'vuex'

// modules
import products from './modules/productsModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products
  }
})