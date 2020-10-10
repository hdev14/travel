import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import('../views/Brazil')
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: () => import('../views/Jamaica')
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: () => import('../views/Hawaii')
  },
  {
    path: '/panama',
    name: 'Panama',
    component: () => import('../views/Panama')
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
