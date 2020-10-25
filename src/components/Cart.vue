<template>
  <div class="cart">
    <div :class="['cart__sidebar', { 'sidebar--close': !isOpen }]">
      <div class="cart__header">
        <div @click="toggle" class="cart__header__btn">
          <img src="/img/icon_arrow_left.svg" alt="">
        </div>
        <h4 class="cart__header__title">WineBox ({{ totalItens }})</h4>
      </div>
      <div class="cart__body">
        <div v-for="item in cart" :key="item.product.name" class="cart__product">
          <div class="cart__product__img">
            <img :src="item.product.image">
          </div>
          <div class="cart__info">
            <div class="cart__info__top">
              <p class="cart__product__title">{{ item.product.name }}</p>
              <div @click="removeFromCart(item.product)">
                <img class="product__remove" src="/img/close.svg">
              </div>
            </div>
            <div class="cart__info__bottom">
              <div>
                <input type="text" style="width: 20px" :value="item.qtd">
              </div>
              <span class="bottom__price">R$ {{ formatBrl(item.product.pricePromotional) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__footer">
        <div class="cart__subtotal">
          <span class="title">Subtotal</span>
          <span class="price">R$ {{ formatBrl(totalPrice) }}</span>
        </div>
        <button class="btn product__btn btn--green">Finalizar pedido</button>
      </div>
    </div>
    <div
      @click="toggle"
      :class="['cart__wrapper', { 'wrapper--close': !isOpen }]"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { formatBrl } from '@/utils/formatCurrency'
import storageCart from '@/store/helpers/storageCart'

export default {
  props: {
    isOpen: { type: Boolean, required: true }
  },
  computed: {
    ...mapState('cart', {
        cart: state => state.data,
        totalItens: state => state.totalItens,
        totalPrice: state => state.totalPrice
    })
  },
  methods: {
    ...mapActions({
      updateCart: "cart/updateCart",
    }),
    formatBrl,
    toggle () {
      this.$emit('toggle')
    },
    removeFromCart (product) {
      storageCart.removeProduct(product)
      this.updateCart()
    }
  }
}
</script>

<style>

</style>