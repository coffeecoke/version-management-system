<template>
  <el-container>
    <el-header>
      <header></header>
    </el-header>
    <el-container>
      <el-aside width="210px"></el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from './header'
import Aside from './aside'
export default {
  name: 'Layout',
  components: {
    Header,
    Aside
  },
  data () {
    return {}
  },
  activated () {}
}
</script>
<style scoped lang="scss">
/* css */

</style>
