<template>
  <div class="cart">
    <div :class="['cart__sidebar', { 'sidebar--close': !isOpen }]">
      <div class="cart__header">
        <div @click="toggle" class="cart__header__btn">
          <img src="/img/icon_arrow_left.svg" alt="">
        </div>
        <h4 class="cart__header__title">WineBox (5)</h4>
      </div>
    </div>
    <div
      @click="toggle"
      :class="['cart__wrapper', { 'sidebar--close': !isOpen }]"
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