import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../components/MainView.vue'
import CatalogView from '../components/CatalogView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/catalog',
    name: 'CatalogView',
    component: CatalogView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
