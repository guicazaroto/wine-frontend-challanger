import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import '@/assets/scss/wine.scss'

// plugins
import Repository from '@/plugins/Repository'
import VueMeta from 'vue-meta';
import VueJsonLD from 'vue-jsonld'
 
Vue.use(Repository)
Vue.use(VueMeta);
Vue.use(VueJsonLD)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
