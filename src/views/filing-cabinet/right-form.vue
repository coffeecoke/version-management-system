<template>
  <div class="form-container">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
/* css */

</style>
