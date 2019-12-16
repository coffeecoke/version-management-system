import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/filing-cabinet',
      component: () => import('@/views/layout'),
      children: [
        {
          path: '/filing-cabinet',
          name: '档案柜',
          component: () => import('@/views/filing-cabinet')
        },
        {
          path: '/key-words',
          name: '关键词检索',
          component: () => import('@/views/key-words')
        },
        {
          path: '/summary-troubleshooting',
          name: '摘要排查',
          component: () => import('@/views/summary-troubleshooting')
        }
      ]
    }
  ]
})
