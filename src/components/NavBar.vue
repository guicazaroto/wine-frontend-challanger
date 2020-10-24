<template>
  <div>
    <!-- Shopping Cart sidebar -->
    <div class="cart">
      <div :class="['cart__sidebar', { 'sidebar--close': !isOpen }]">
        <h1>Carrinho</h1>
      </div>
      <div
        @click="toggleCart"
        :class="['cart__wrapper', { 'sidebar--close': !isOpen }]"
      />
    </div>
  
    <!-- Horizontal Navbar -->
    <header class="header">
      <div class="container header__container">
        <h1 class="header__logo">
          <a href="#">
            <img src="img/wine.svg" alt="Wine Vinhos">
          </a>
        </h1>
        <ul class="navbar">
          <li v-for="item in items" :key="item.title" class="navbar__item">
            <a class="navbar__link" :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
        <div @click="toggleCart" class="header__cart">
          <img src="img/bag-icon.png" alt="carrinho de compras">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// import Cart from '@/components/Cart'

export default {
  props: {
    items: { type: Array, required: true }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleCart () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        document.body.style.overflow = 'hidden'
      }
    }
  }
}
</script>

<style>

</style>