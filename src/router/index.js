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
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) return savedPosition

    const position = {}
    if (to.hash) {
      position.seletor = to.hash

      if (document.querySelector(to.hash)) return position

      return false
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.user) {
    return next({ name: 'Login' })
  }

  next()
})

export default router
