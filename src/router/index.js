import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brazil from '../views/Brazil'
import Jamaica from '../views/Jamaica'
import Hawaii from '../views/Hawaii'
import Panama from '../views/Panama'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: Brazil
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: Jamaica
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: Hawaii
  },
  {
    path: '/panama',
    name: 'Panama',
    component: Panama
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
