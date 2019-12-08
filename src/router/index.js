import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/index',
    name: 'HomePage',
    component: () => import('@/views/game-park/HomePage.vue'),
    meta: {
      title: '首页' 
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/game-park/Blog.vue'),
    meta: {
      title: '博客' 
    }
  },
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/game-park/HomePage.vue'),
    meta: {
      title: '首页' 
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
