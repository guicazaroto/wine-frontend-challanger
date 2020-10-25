<template>
  <div>
    <!-- Shopping Cart sidebar -->
    <Cart
      @toggle="toggleCart"
      :is-open="isOpen"
    />
  
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
          <img class="cart__icon" src="img/bag-icon.png" alt="carrinho de compras">
          <span class="cart__total">0</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Cart from '@/components/Cart'

export default {
  props: {
    items: { type: Array, required: true }
  },
  components: {
    Cart
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleCart () {
      this.isOpen = !this.isOpen
      this.removeOverflow()
    },
    removeOverflow () {
      if (this.isOpen) {
        document.body.style.overflow = 'hidden'
        return
      } 
      document.body.style.overflow = 'visible'
    }
  }
}
</script>

<style>

</style>