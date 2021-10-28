<template>
  <div>
    <el-button @click="logout">退出</el-button>
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
