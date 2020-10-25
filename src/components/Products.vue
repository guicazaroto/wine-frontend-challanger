<template>
  <div v-if="!loading" class="products mt-4">
    <div v-for="product in products" :key="product.name" class="product__item">
      <div class="product__box">
        <div class="product__img">
          <img :src="product.image" />
        </div>
        <div class="product__info">
          <h3 class="product__description">{{ product.name }}</h3>
          <div class="buy-box">
            <div v-if="product.available" class="price-info">
              <span class="product__price">R$ {{ formatPrice(product.priceStock) }}</span>
              <span class="product__customer">sócio wine</span>
              <p class="product__member-price">
                <span class="symbol">R$</span>
                <span class="integer">{{ formatPrice(product.priceMember) }}</span>
              </p>
            </div>
            <button
              @click="addProduct(product)"
              :class="[
                'btn product__btn desktop',
                {
                  'btn--purple': product.available,
                }]">
              <span v-if="product.available">Adicionar</span>
              <span v-else>Esgotado</span>
            </button>
          </div>
        </div>
      </div>
      <button
        @click="addProduct(product)"
        :class="[
          'btn product__btn mobile',
          {
            'btn--purple': product.available,
          }]">
          <span v-if="product.available">Adicionar</span>
        <span v-else>Esgotado</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('products', {
      products: state => state.data,
      loading: state => state.loading
    })
  },
  methods: {
    ...mapActions('products', ['getProducts']),
    formatPrice (price) {
      return price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,  
        maximumFractionDigits: 2
      })
    },
    addProduct (product) {
      if (!product.available) return;

      // if has no one product then create storage
      const data = this.getStorage()
      if (!data) {
        this.createNewStorage(product)
        return
      }

      // if has no one of current product then create this item
      const productIndex = data.findIndex(x => x.name === product.name)
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
      store.push({ name: product.name, qtd: 1 })
      
      this.setToLocalStorage(store)
    },
    storeExistingProduct (product, data, index) {
      data[index].qtd++
      this.setToLocalStorage(data)
    },
    storeNewProduct (product, data) {
      data.push({ name: product.name, qtd: 1 })
      this.setToLocalStorage(data)
    },
    setToLocalStorage (data) {
      localStorage.setItem('products', JSON.stringify(data))
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
