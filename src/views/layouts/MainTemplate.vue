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
  },
  jsonld: {
		"@context": "http://schema.org",
		"@type": "Organization",
		"name": "Wine",
		"legalName": "W2W E-Commerce de Vinhos S.A",
		"url": "https://www.wine.com.br/",
		"logo": "https://img.wine.com.br/fenix/image/logo.png",
		"foundingDate": "2008",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Rua Manoel Feu Subtil 60",
			"addressLocality": "Vitória",
			"addressRegion": "ES",
			"postalCode": "29050-400",
			"addressCountry": "BR"
		},
		"contactPoint": [
			{
				"@type": "ContactPoint",
				"telephone": "+55-27-3202-2600",
				"contactType": "customer service",
				"areaServed": "BR"
			},
			{
				"@type": "ContactPoint",
				"telephone": "+55-27-3202-2600",
				"contactType": "Sales"
			}
		],
		"sameAs": [
			"https://www.facebook.com/wine.vinhos",
			"https://twitter.com/wine_vinhos",
			"https://www.instagram.com/winevinhos/",
			"https://www.youtube.com/user/WineVinhos"
		]
  }
}
</script>