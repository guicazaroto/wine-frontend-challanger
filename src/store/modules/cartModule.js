const state = {
  data: JSON.parse(localStorage.getItem('products'))
}

const actions = {
  updateCart ({ commit }) {
    commit('UPDATE_CART', JSON.parse(localStorage.getItem('products')))
  }
}

const mutations = { 
  UPDATE_CART (state, value) {
    state.data = value
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}