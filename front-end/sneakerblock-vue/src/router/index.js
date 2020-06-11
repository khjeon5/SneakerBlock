import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue'),
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue'),
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('@/views/Delivery.vue'),
  },
  {
    path: '/itembuy',
    name: 'ItemBuy',
    component: () => import('@/views/ItemBuy.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/Product.vue'),
  },
  {
    path: '/userpage',
    name: 'UserPage',
    component: () => import('@/views/UserPage.vue'),
  },
  {
    path: '/userwallet',
    name: 'UserWallet',
    component: () => import('@/views/UserWallet.vue'),
  },
  {
    path: '/adminpage',
    name: 'AdminPage',
    component: () => import('@/views/AdminPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
