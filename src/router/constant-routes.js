// Layout
import Layout from '@/components/layout/index.vue'
import Login from '@/components/Login.vue'

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
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
]
