<template>
  <el-header>
    <div>
      <img src="@/assets/imgs/logo.png" alt="">
    </div>
    <div>
      <img class="conent-right__avatar" referrerpolicy="no-referrer" :src="avatar" />
      <span class="user-name">用户名&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="javascript: ;" @click="logout">退出</a></span>
    </div>
  </el-header>
</template>

<script>
import { removeSession } from '@/utils/auth'

export default {
  name: 'NavHeader',
  data () {
    return {
      // 头像
      avatar: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng72130ed0117ae524134c1bdee9360822230f79c44eca6044e8031ba4ad949067'
    }
  },
  methods: {
    logout () {
      this.$confirm('确认退出系统？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeSession()
        // 跳转到登录页
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header{
  background-color:$headerBgColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  .conent-right__avatar{
    margin-right: 15px;
  }

  .user-name{
    color: #fff;
  }
}
</style>
