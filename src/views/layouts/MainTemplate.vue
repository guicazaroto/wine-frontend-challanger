<template>
  <div>
    <NavBar :items="items" />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      items: [
        { title: 'Clube', link: '#' },
        { title: 'Loja', link: '#' },
        { title: 'Produtores', link: '#' },
        { title: 'Ofertas', link: '#' },
        { title: 'Eventos', link: '#' }
      ]
    }
  }
}
</script>