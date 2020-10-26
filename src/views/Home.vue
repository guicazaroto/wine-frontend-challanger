<template>
  <div class="container pb-20">
    <Banner />
    <Products />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Products from '@/components/Products'

export default {
  name: 'Home',
  metaInfo: {
  htmlAttrs: {
    lang: 'pt-BR'
  },
  title: 'Wine | Compre vinhos online com descontos exclusivos!',
  meta: [{
      name: 'descrition',
      content: 'Vinho tinto, rosé, branco ou espumante. Na Wine, você encontra os melhores rótulos pelos menores preços. Acesse a loja ou baixe nosso aplicativo!'
    }],
  },
  components: {
    Banner,
    Products
  }
}
</script>
