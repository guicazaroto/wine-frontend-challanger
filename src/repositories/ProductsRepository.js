const resource = '908ec5b5-1e5a-4602-9008-47719f7c6759'

class ProductsRepository {
  /**
   * 
   * @param {import('./clients/node_modules/axios').AxiosInstance} client 
   */
  constructor (client) {
    this.client = client
  }

  async getAll () {
    const res = await this.client.get(`/${resource}`)
    return res
  }
}

export default ProductsRepository