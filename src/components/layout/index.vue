<template>
  <el-container class="is-vertical main-wrap">
    <!-- 头部信息栏 -->
    <nav-header></nav-header>
    <el-container>
      <!-- 左侧菜单栏 -->
      <side-bar></side-bar>
      <!-- 主要内容区 -->
      <el-main>
        <!-- 面包屑 -->
        <breadcrumb></breadcrumb>
        <router-view :key="$route.path" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavHeader from './nav-header/index.vue'
import SideBar from './side-bar/index.vue'
import Breadcrumb from '../Breadcrumb.vue'

export default {
  name: 'Layout',
  components: {
    NavHeader,
    SideBar,
    Breadcrumb
  }
}
</script>

<style lang="scss" scoped>
.main-wrap{
  height: 100%;
}
.el-main{
  background-color: $mainBgColor;
}
</style>
