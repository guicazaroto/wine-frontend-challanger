import Vue from 'vue'
import VueRouter from 'vue-router'
import MainTemplate from '@/views/layouts/MainTemplate'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainTemplate',
    component: MainTemplate,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
