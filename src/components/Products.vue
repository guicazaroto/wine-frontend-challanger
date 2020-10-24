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
              <span class="product__price">R$ {{ product.priceStock }}</span>
              <span class="product__customer">sócio wine</span>
              <p class="product__member-price">
                <span class="symbol">R$</span>
                <span class="integer">{{ product.priceMember }}</span>
              </p>
            </div>
            <button
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
    ...mapActions('products', ['getProducts'])
  },
  created () {
    this.getProducts()
  }
}
</script>
