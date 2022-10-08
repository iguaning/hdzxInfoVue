import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '',
      component: HomePage
    },
    {
      path: '',
      name: 'home',
      component: HomePage
    },
    {
      path: '/news',
      name: 'thenews',
      component: () => import('../views/TheNews.vue'),
      children: [
        {
          path: '/schoolnews',
          name: 'schoolnews',
          component: () => import('../views/SchoolNew.vue')
        },
        {
          path: '/gamenews',
          name: 'gamenews',
          component: () => import('../views/GameNew.vue')
        }
      ]
    },
    {
      path: '/fleamarket',
      name: 'fleamarket',
      component: () => import('../views/FleaMarket.vue')
    },
    {
      path: '/zone',
      name: 'schoolzone',
      component: () => import('../views/SchoolZone.vue')
    },
    {
      path: '/login',
      name: 'userlogin',
      component: () => import('../views/UserLogin.vue')
    },
    {
      path: '/register',
      name: 'userregister',
      component: () => import('../views/UserRegister.vue')
    }
  ]
})

export default router