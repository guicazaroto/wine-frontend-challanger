// clients
import client from './clients/AxiosClient'

// repositories
import ProductsRepository from './ProductsRepository'

const RepositoryFactory = {}

const repositories = {
  products: ProductsRepository
}

RepositoryFactory.make = (repository) => {
  return new repositories[repository](client)
}

export default RepositoryFactory