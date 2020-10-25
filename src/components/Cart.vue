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
        <div class="cart__product">
          <div class="cart__product__img">
            <img src="https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=110/assets-images/produtos/23315-01.png">
          </div>
          <div class="cart__info">
            <div class="cart__info__top">
              <p class="cart__product__title">Vinho diferenciado da Wine 25 anos</p>
              <img class="product__remove" src="/img/close.svg" alt="">
            </div>
            <div class="cart__info__bottom">
              <div>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <span class="bottom__price">R$ 22,34</span>
            </div>
          </div>
        </div>

        <!-- Example Products -->
        <div class="cart__product">
          <div class="cart__product__img">
            <img src="https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=110/assets-images/produtos/23315-01.png">
          </div>
          <div class="cart__info">
            <div class="cart__info__top">
              <p class="cart__product__title">Vinho diferenciado da Wine 25 anos</p>
              <img class="product__remove" src="/img/close.svg" alt="">
            </div>
            <div class="cart__info__bottom">
              <div>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <span class="bottom__price">R$ 22,34</span>
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
export default {
  props: {
    isOpen: { type: Boolean, required: true }
  },
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<style>

</style>