import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import '@/assets/scss/wine.scss'

// plugins
import Repository from '@/plugins/Repository'

Vue.use(Repository)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
