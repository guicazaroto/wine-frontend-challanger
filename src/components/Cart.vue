<template>
  <div class="cart">
    <div :class="['cart__sidebar', { 'sidebar--close': !isOpen }]">
      <div class="cart__header">
        <div @click="toggle" class="cart__header__btn">
          <img src="/img/icon_arrow_left.svg" alt="">
        </div>
        <h4 class="cart__header__title">WineBox (5)</h4>
      </div>
      <div class="cart__body">
        <div v-for="item in cart" :key="item.product.name" class="cart__product">
          <div class="cart__product__img">
            <img :src="item.product.image">
          </div>
          <div class="cart__info">
            <div class="cart__info__top">
              <p class="cart__product__title">{{ item.product.name }}</p>
              <img class="product__remove" src="/img/close.svg">
            </div>
            <div class="cart__info__bottom">
              <div>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <span class="bottom__price">R$ {{ formatBrl(item.product.pricePromotional) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__footer">
        <div class="cart__subtotal">
          <span class="title">Subtotal</span>
          <span class="price">R$ 299,34</span>
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
import { mapState } from 'vuex'
import { formatBrl } from '@/utils/formatCurrency'

export default {
  props: {
    isOpen: { type: Boolean, required: true }
  },
  computed: {
    ...mapState('cart', {
        cart: state => state.data
    })
  },
  methods: {
    formatBrl,
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<style>

</style>