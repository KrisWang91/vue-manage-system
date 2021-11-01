<template>
  <div>
    1111
  </div>
</template>

<script>
import { removeSession } from '@/utils/auth'
export default {
  name: 'Home',
  methods: {
    logout () {
      // 清除token
      removeSession()
      // 跳转到登录页
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
