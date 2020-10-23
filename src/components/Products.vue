<template>
  <div class="products">
    <div class="product__item">
      <div class="product__img"></div>
      <div class="product__info">
        <img src="https://www.wine.com.br/cdn-cgi/image/q=99,f=auto,h=176/assets-images/produtos/19728-01.png" />
        <h3 class="product__text">Vinho de chocolate com pimenta</h3>
        <p class="product__text text--high">$ 35.50</p>
        <button class="product__btn">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.product__item {
  width: 30%;
  box-shadow: 0 2px 5px rgba(0,0,0,.05);
  background: #fff;
}
.product__text {
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: #1D1D1B;
}
.text--high {
  color: #c81a79;
  font-size: 18px;
}

.product__btn {
  background: #c81a79;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}
</style>