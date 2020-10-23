<template>
  <div>
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
        <div class="header__bag">
          <img src="img/bag-icon.svg" alt="carrinho de compras">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true }
  }
}
</script>

<style>

</style>