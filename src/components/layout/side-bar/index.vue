<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <!-- 展开 收起 -->
    <div class="toggle-button" @click="isCollapse = !isCollapse">|||</div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#3E4657"
      text-color="#fff"
      active-text-color="#FFFFFF"
      unique-opened
      :collapse="isCollapse"
      :collapse-transition="false"
      router>
      <el-submenu v-for="(menu, index) in menus" :key="index" :index="menu.order+''">
        <template slot="title">
          <i :class="iconList[menu.path]"></i>
          <span>{{menu.authName}}</span>
        </template>
        <el-menu-item-group v-if="menu.children">
          <el-menu-item v-for="(subMenu, subIndex) in menu.children" :key="subIndex" :index="'/'+subMenu.path">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{subMenu.authName}}</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { getMenus } from '@/api/user.js'

export default {
  name: 'SideBar',
  data () {
    return {
      menus: [],
      iconList: {
        users: 'el-icon-user-solid',
        rights: 'el-icon-s-help',
        goods: 'el-icon-s-goods',
        orders: 'el-icon-s-order',
        reports: 'el-icon-s-data'
      },
      // 展开  收起
      isCollapse: false
    }
  },
  created () {
    this.getMenus()
  },
  methods: {
    async getMenus () {
      const { data, meta } = await getMenus()
      this.menus = data || []
      console.log(this.menus)
      console.log(meta)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside{
  background-color: $meunBgColor;

  .el-menu{
    border-right: none;
  }

  .el-submenu{
    text-align: left;
  }

  ::v-deep .el-icon-arrow-down:before{
    content: "\e6df";
  }

  .toggle-button{
    height: 30px;
    line-height: 30px;
    color: #fff;
    letter-spacing: 0.2em;
    text-align: right;
    padding-right: 15px;
    cursor: pointer;
  }
}
</style>
