<template>
  <el-breadcrumb class="bread-crumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item,index) in metaList" :key="index" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      metaList: []
    }
  },
  created () {
    this.getPath()
  },
  watch: {
    $route () {
      this.getPath()
    }
  },
  methods: {
    getPath () {
      const matched = this.$route.matched.filter(item => item && item.meta)
      this.metaList = matched.filter(item => item.meta && item.meta.title)
    }
  }
}
</script>

<style lang="scss" scoped>
.bread-crumb{
  width: 100%;
  height: 40px;
  line-height: 40px;
}
</style>
