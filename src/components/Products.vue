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
              <span class="product__price">R$ {{ formatBrl(product.priceStock) }}</span>
              <span class="product__customer">sócio wine</span>
              <p class="product__member-price">
                <span class="symbol">R$</span>
                <span class="integer">{{ formatBrl(product.pricePromotional) }}</span>
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
import storageCart from '@/store/helpers/storageCart'
import { formatBrl } from '@/utils/formatCurrency'

export default {
  computed: {
    ...mapState('products', {
      products: state => state.data,
      loading: state => state.loading
    })
  },
  methods: {
    formatBrl,
    ...mapActions({
      getProducts: "products/getProducts",
      updateCart: "cart/updateCart",
      addProduct: "cart/addProduct"
    }),
    addProduct (product) {
      storageCart.addProduct(product)
      // update cart vuex store
      this.updateCart()
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
