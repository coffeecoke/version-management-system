import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: 'filing-cabinet',
      component: () => import('@/views/layout'),
      children: [
        {
          path: 'filing-cabinet',
          name: 'filingCabinet',
          // redirect: 'filing-cabinet/form-family',
          meta: {
            title: '档案柜'
          },
          component: () => import('@/views/filing-cabinet'),
          children: [
            {
              path: 'form-family',
              name: 'formFamily',
              meta: {
                title: '产品族'
              },
              component: () => import('@/views/filing-cabinet/form-family')
            },
            {
              path: 'form-generation',
              name: 'formGeneration',
              meta: {
                title: '产品代'
              },
              component: () => import('@/views/filing-cabinet/form-generation')
            },
            {
              path: 'add-form-generation',
              name: 'addFormGeneration',
              meta: {
                title: '新增产品代'
              },
              component: () => import('@/views/filing-cabinet/add-form-generation')
            }
          ]
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
