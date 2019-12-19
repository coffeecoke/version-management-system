<template>
  <div class="filing-content">
    <left-tree class="left-tree"></left-tree>
    <right-form class="right-form"></right-form>
  </div>
</template>
<script>
import LeftTree from './left-tree'
import RightForm from './right-form'
export default {
  components: {
    LeftTree,
    RightForm
  },
  data () {
    return {
    }
  },
  activated () {
  }
}
</script>
<style scoped lang="scss">
/* css */
.filing-content {
  height:100%;
  display:flex;
  justify-content: space-between;

}
.left-tree {
  width:390px;
  margin-right:20px;
  background-color:#fff;
}
.right-form {
  flex:1;
  background-color:#fff;
}
</style>
