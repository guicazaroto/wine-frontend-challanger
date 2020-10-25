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
    const products = state.data

    if (!products.length) {
      commit('UPDATE_TOTAL', 0)
      return
    }

    if (products.length > 1) {
      const total = products
        .reduce((cur, next) => cur.qtd + next.qtd)

      commit('UPDATE_TOTAL', total)
      return
    }

    commit('UPDATE_TOTAL', products[0].qtd)
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