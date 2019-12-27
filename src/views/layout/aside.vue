<template>
  <el-menu
    class="el-menu"
    :router = "true"
    :default-active = "defaultActive"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="menu-1">
      <template slot="title">
        <i class="fa fa-building-o"></i>
        <span>工程实施</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="menu-1-1">选项1</el-menu-item>
        <el-menu-item index="menu-1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="menu-2">
      <template slot="title">
        <i class="fa fa-address-card"></i>
        <span>产品经理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="filing-cabinet">档案柜</el-menu-item>
        <el-menu-item index="key-words">关键字检索</el-menu-item>
        <el-menu-item index="summary-troubleshooting">摘要排查</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="menu-3">
      <template slot="title">
        <i class="fa fa-user-circle"></i>
        <span>管理员</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>张三</el-menu-item>
        <el-menu-item>李四</el-menu-item>
        <el-menu-item>王二麻子</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="menu-4">
      <template slot="title">
        <i class="fa fa-search"></i>
        <span>资料库检索</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>111</el-menu-item>
        <el-menu-item>222</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'Aside',
  data () {
    return {}
  },
  computed: {
    defaultActive () {
      return 'filing-cabinet'
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }

  },
  activated () {}
}
</script>
<style scoped lang="scss">
/* css */
.el-menu {
  width:100%;
  height:100%;
}
</style>
