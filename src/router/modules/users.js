import Layout from '@/components/layout/index.vue'

export default {
  path: '/users',
  component: Layout,
  meta: { title: '用户管理' },
  children: [
    {
      path: '/users',
      name: 'Users',
      meta: { title: '用户列表' },
      component: () => import('@/views/users/index.vue')
    }
  ]
}
