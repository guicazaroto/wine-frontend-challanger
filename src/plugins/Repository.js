import RepositoryFactory from '@/repositories/RepositoryFactory'

const Repository = {}

Repository.install = Vue => {
  Vue.prototype.$repository = function (repository) {
    return RepositoryFactory.make(repository)
  }
}

export default Repository