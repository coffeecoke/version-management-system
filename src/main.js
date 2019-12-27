// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import axios from 'axios'
// import store from './store' // 引入vuex
import '@/styles/reset.scss'
import '@/styles/transition.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/font-awesome.css'
import '@/styles/element-ui.scss'
import 'babel-polyfill' // http 框架
Vue.prototype.$http = axios // 解决ie下promise报错
Vue.config.productionTip = false
Vue.use(ElementUI)
// 防止点击路由跳转相同地址报错
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: {
    App
  },
  template: '<App/>'
})
