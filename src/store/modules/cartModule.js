const state = {
  data: JSON.parse(localStorage.getItem('products')),
  totalItens: 0
}

const actions = {
  updateCart ({ commit, dispatch }) {
    commit('UPDATE_CART', JSON.parse(localStorage.getItem('products')))
    dispatch('updateTotal')
  },
  updateTotal ({ state, commit }) {
    let total;
    if (state.data.length > 1) {
      total = state.data.reduce((cur, next) => cur.qtd + next.qtd)
    } else {
      total = state.data[0].qtd
    }
    commit('UPDATE_TOTAL', total)
  }
}

const mutations = { 
  UPDATE_CART (state, value) {
    state.data = value
  },
  UPDATE_TOTAL (state, value) {
    state.totalItens = value
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}