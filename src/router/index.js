import Vue from 'vue'
import VueRouter from 'vue-router'
import { getSession } from '@/utils/auth'
import routes from '@/router/constant-routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const token = getSession()
  if (!token) return next('/login')
  next()
})

export default router
