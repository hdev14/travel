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
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
