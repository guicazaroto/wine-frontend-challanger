class ProductsRepository {
  /**
   * 
   * @param {import('./clients/node_modules/axios').AxiosInstance} client 
   */
  constructor (client) {
    this.client = client
  }

  async getAll () {
    const res = await this.client.get()
    return res
  }
}

export default ProductsRepository