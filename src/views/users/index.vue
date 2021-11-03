<template>
  <div class="main-wrap">
    <!-- 新增 编辑弹框 -->
    <user-dialog :title="userInfo.id ? '编辑用户' : '新增用户'" :visible.sync="visible" ></user-dialog>

    <!-- 搜索区 -->
    <div class="query-box">
      <div class="query-box__top">
        <el-form ref="form" :model="queryParams" label-width="50px" size="small" :inline="true">
          <el-form-item label="用户名：" style="margin-right:20px">
            <el-input v-model="queryParams.query" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary">查询</el-button>
            <el-button size="small">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-row class="query-box__top">
        <el-col class="right" :span="24">
          <el-button size="small" @click="addUser">添加用户</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- 列表区 -->
    <div class="center-box">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" :index="indexMethod" label="#"></el-table-column>
          <el-table-column prop="username" label="姓名"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="mobile" label="电话"></el-table-column>
          <el-table-column prop="role_name" label="角色"></el-table-column>
          <el-table-column prop="mg_state" label="状态">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.mg_state"></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button @click="editUserInfo(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click="delteUser(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">设置</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
    <!-- 分页 -->
    <list-pagination
      v-if="tableData && tableData.length > 0"
      :total="total"
      :pagenum.sync="queryParams.pagenum"
      :pagesize.sync="queryParams.pageSize"
      @pagination="handleCurrentChange"
    ></list-pagination>
  </div>
</template>

<script>
import ListPagination from '@/components/ListPagination.vue'
import { getUsers } from '@/api/user.js'
import UserDialog from './components/user-dialog.vue'

export default {
  name: 'Users',
  data () {
    return {
      queryParams: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      tableData: [],
      total: 0,
      userInfo: {},
      visible: false
    }
  },
  components: {
    ListPagination,
    UserDialog
  },
  created () {
    this.getUserList()
  },
  methods: {
    addUser () {
      this.userInfo = {}
      this.visible = true
    },
    async getUserList () {
      const { data } = await getUsers(this.queryParams)
      this.tableData = data.users || []
      this.total = data.total || 0
    },
    indexMethod (index) {
      return index + 1
    },
    editUserInfo (row) {
      this.userInfo = row
      this.visible = true
    },
    delteUser (row) {

    },
    handleCurrentChange (val) {
      this.queryParams = Object.assign(this.queryParams, val)
      this.getUserList()
    }
  }
}
</script>

<style lang="scss" scoped>
.main-wrap{

}
.query-box{
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  padding: 20px;

  &__top{
    display: flex;
    align-items: flex-start;
    width: 100%;

    .el-form-item--small.el-form-item{
      margin-bottom: 0;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 auto;
  }
}
.center-box{
  padding: 15px;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 4px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
// 分页
.el-pagination{
  background-color: #fff;
  padding:15px;
  text-align: right;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>
