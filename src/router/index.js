import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Almac from '../views/Almac.vue'
import Longi from '../views/Longi.vue'
import Mas from '../views/Mas.vue'
import Mone from '../views/Mone.vue'
import Tiem from '../views/Tiem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/almac',
    name: 'Almac',
    component: Almac,
  },
  {
    path: '/longi',
    name: 'Longi',
    component: Longi,
  },
  {
    path: '/mas',
    name: 'Mas',
    component: Mas,
  },
  {
    path: '/mone',
    name: 'Mone',
    component: Mone,
  },
  {
    path: '/tiem',
    name: 'Tiem',
    component: Tiem,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
