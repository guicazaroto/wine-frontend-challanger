import RepositoryFactory from '@/repositories/RepositoryFactory'

const state = {
  data: null,
  loading: false
}

const actions = {
  async getProducts ({ commit }) {
    try {
      commit('SET_LOADING', true)
      const product = RepositoryFactory.make('products')
      const result = await product.getAll()

      commit('SET_DATA', result.data)
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

const mutations = {
  SET_LOADING (state, value) {
    state.loading = value
  },
  SET_DATA (state, data) {
    state.data = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
