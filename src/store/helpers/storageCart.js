const addToLocalStorage = {
  addProduct (product) {
    if (!product.available) return;

    // if has no one product then create storage
    const data = this.getStorage()
    if (!data) {
      this.createNewStorage(product)
      return
    }

    // if has no one of current product then create this item
    const productIndex = data.findIndex(x => x.product.name === product.name)
    if (productIndex === -1) {
      this.storeNewProduct(product, data)
      return
    }

    // if already has an product, add quantity
    this.storeExistingProduct(product, data, productIndex)
  },
  getStorage () {
    const localData = localStorage.getItem('products')
    const data = JSON.parse(localData)
    return data
  },
  createNewStorage (product) {
    const store = []
    store.push({ product, qtd: 1 })
    
    this.setToLocalStorage(store)
  },
  storeExistingProduct (product, data, index) {
    data[index].qtd++
    this.setToLocalStorage(data)
  },
  storeNewProduct (product, data) {
    data.push({ product, qtd: 1 })
    this.setToLocalStorage(data)
  },
  setToLocalStorage (data) {
    localStorage.setItem('products', JSON.stringify(data))
  }
}

export default addToLocalStorage