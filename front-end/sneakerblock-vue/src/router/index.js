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
    path: '/favorites',
    name: 'Favorites',
    component: () => import('@/views/Favorites.vue'),
  },
  {
    path: '/productenroll',
    name: 'ProductEnroll',
    component: () => import('@/views/ProductEnroll.vue'),
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
    path: '/item',
    name: 'Item',
    component: () => import('@/views/ProductItem.vue'),
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
    children: [
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/components/Admin/Admin.vue'),
      },
      {
        path: '/validator',
        name: 'Validator',
        component: () => import('@/components/Admin/Validator.vue'),
      },
      {
        path: '/delivery',
        name: 'Delivery',
        component: () => import('@/components/Admin/Delivery.vue'),
      },
    ],
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '/itembuy',
    name: 'ItemBuy',
    component: () => import('@/views/ItemBuy.vue'),
  },
  {
    path: '/test',
    name: 'TestPage',
    component: () => import('@/views/TestPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
