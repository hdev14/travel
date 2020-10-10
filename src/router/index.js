import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    props: true,
    component: () => import('../views/DestinationDetails.vue'),
    children: [
      {
        path: ':experienceSlug',
        name: 'ExperienceDetails',
        props: true,
        component: () => import('../views/ExperienceDetails.vue')
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(d => d.slug === to.params.slug)

      if (exists) {
        return next()
      }

      next({ name: 'NotFound' })
    }
  },
  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
