import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/details/:slug',
    name: 'DestinationDetail',
    props: true,
    component: () => import('../views/DestinationDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
