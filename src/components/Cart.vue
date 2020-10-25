<template>
  <div class="cart">
    <div :class="['cart__sidebar', { 'sidebar--close': !isOpen }]">
      <h1>Carrinho</h1>
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