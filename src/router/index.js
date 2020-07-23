import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Service from '../views/Service.vue'
import Products from '../views/Products.vue'
import HSF700 from '../views/HSF700.vue'
import QX008 from '../views/QX008.vue'
import Services from '../views/Services.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/products',
    name:'Products',
    component: Products
  },
  {
    path: '/hsf700',
    name:'HSF700',
    component: HSF700
  },
  {
    path: '/qx008',
    name:'QX008',
    component: QX008
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
