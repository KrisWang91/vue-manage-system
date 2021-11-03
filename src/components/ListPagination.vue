<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pagenum"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</template>

<script>
export default {
  name: 'ListPagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    pagenum: {
      type: Number,
      default: 1
    },
    pagesize: {
      type: Number,
      default: 2
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('pagination', { pagesize: val })
    },
    handleCurrentChange (val) {
      this.$emit('pagination', { pagenum: val })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
