<template>
  <main class="main">
    <div class="breadcrumb">
      <!-- <Breadcrumb></Breadcrumb> -->
    </div>
    <div class="content">
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </main>
</template>
<script>
// import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'RightMain',
  data () {
    return {}
  },
  components: {
    // Breadcrumb
  },
  beforeCreate () {
    console.log()
  }
}

</script>
<style lang="scss" scoped>
  .main {
    height:100%;
  }
  .content {
    height:100%;
    background-color:#fff;
  }
</style>
