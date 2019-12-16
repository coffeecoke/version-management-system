<template>
  <div class="header">
    <div class="header-left">
      <div class="logo"></div>
      <div class="logo-title"></div>
    </div>
    <div class="header-right">
      <div class="user-name">hello,您好</div>
      <div class="sign-out">登出</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
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
.header {
  height:60px;
  background-color:#5D70EA;
}
</style>
