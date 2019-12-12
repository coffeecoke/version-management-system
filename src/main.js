// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store' // 引入vuex
import ElementUI from 'element-ui'
import '@/styles/element-ui.scss'
import 'babel-polyfill' // http 框架
Vue.prototype.$http = axios // 解决ie下promise报错
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})