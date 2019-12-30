<template>
  <el-container class="wrap">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container class="content">
      <el-aside width="210px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <right-main></right-main>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from './header'
import Aside from './aside'
import RightMain from './right-main'
export default {
  name: 'Layout',
  components: {
    Header,
    Aside,
    RightMain
  },
  data () {
    return {}
  },
  activated () {}
}
</script>
<style scoped lang="scss">
/* css */
.wrap {
  height:100%;
}
.el-header {
  height:60px;
  background-color:#5D70EA;
}
.el-main {
  background-color:#f1f1f1;
}
// .content {
//   height:calc (100% - 60px);
// }
</style>
