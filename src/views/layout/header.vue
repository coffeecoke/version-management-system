<template>
  <div class="header">
    <div class="header-left">
      <div class="logo"></div>
      <div class="logo-title">中软融鑫版本管理系统</div>
    </div>
    <div class="header-right">
      <div class="user-name">hello,您好</div>
      <div class="sign-out" @click="logout">退出</div>
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
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
      this.$router.push({ path: '/login' })
    }
  },
  activated () {
  }
}
</script>
<style scoped lang="scss">
/* css */
.header {
  height:100%;
  color:#fff;
  display: flex;
  justify-content: space-between;
  .header-left {
    display: flex;
    align-items:center;
  }
  .logo {
    width:100px;
    height:30px;
    background: url('~@/assets/imgs/logo.png') center no-repeat;
  }
  .logo-title {
    color:#fff;
    font-size:20px;
    margin-left:16px;
  }
  .header-right {
    display: flex;
    align-items: center;
  }
  .user-name {
    padding-right:10px;
    position: relative;
    &:after {
      content:'';
      position: absolute;
      right:0;
      width:1px;
      top:-5px;
      bottom:-5px;
      background-color:#c9c7c7;
    }
  }
  .sign-out {
    padding-left:10px;
    cursor: pointer;
  }
}
</style>
