// Layout
import Layout from '@/components/layout/index.vue'
import Login from '@/components/Login.vue'
import USERS from '@/router/modules/users.js'

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    redirect: '/welcome',
    component: Layout,
    meta: { title: '首页' },
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  USERS
]
