import Vue from 'vue'
import Vuex from 'vuex'

// modules
import products from './modules/productsModule'
import cart from './modules/cartModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    cart
  }
})