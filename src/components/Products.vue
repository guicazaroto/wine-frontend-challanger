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
            <span class="product__price">R$ {{ product.priceStock }}</span>
            <span class="product__customer">sócio wine</span>
            <p class="product__member-price">
              <span class="symbol">R$</span>
              <span class="integer">{{ product.priceMember }}</span>
            </p>
            <button class="product__btn desktop">Adicionar</button>
          </div>
        </div>
      </div>
      <button class="product__btn mobile">Adicionar</button>
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
    ...mapActions('products', ['getProducts'])
  },
  created () {
    this.getProducts()
  }
}
</script>
