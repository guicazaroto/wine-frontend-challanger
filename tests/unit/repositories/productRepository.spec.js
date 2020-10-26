import ProductsRepository from '@/repositories/ProductsRepository'

describe('repositories/ProductsRepository', () => {
  const mockClient = {
    get: jest.fn(() => {})
  }

  it('should get call client axios to get products', async () => {
    const client = mockClient
    const getCall = client.get.mock
    const products = new ProductsRepository(client)
    const res = await products.getAll()

    // verify if GET method of mock object have been called 
    expect(getCall.instances[0].get).toHaveBeenCalledTimes(1)

    // verify if calls correct route
    expect(getCall.calls[0][0]).toBe('/908ec5b5-1e5a-4602-9008-47719f7c6759')
  })
})