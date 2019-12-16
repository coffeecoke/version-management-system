<template>
  <el-menu
    default-active="2"
    class="el-menu"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="menu-1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>工程实施</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="menu-1-1">选项1</el-menu-item>
        <el-menu-item index="menu-1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="menu-2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>产品经理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>档案柜</el-menu-item>
        <el-menu-item>关键字检索</el-menu-item>
        <el-menu-item>摘要排查</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="menu-3">
      <template slot="title">
        <i class="el-icon-location"></i>
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
        <i class="el-icon-location"></i>
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
  activated () {}
}
</script>
<style scoped lang="scss">
/* css */
.el-menu {
  width:100%;
}
</style>
