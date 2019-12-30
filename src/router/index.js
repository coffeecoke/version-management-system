import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      meta: {
        title: '首页'
      },
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

            },
            {
              path: 'add-form-version',
              name: 'addFormVersion',
              meta: {
                title: '新增产品版本'
              },
              component: () => import('@/views/filing-cabinet/add-form-version')
            },
            {
              path: 'form-version',
              name: 'formVersion',
              meta: {
                title: '产品版本'
              },
              component: () => import('@/views/filing-cabinet/form-version')
            },
            {
              path: 'add-form-package',
              name: 'addFormPackage',
              meta: {
                title: '程序包'
              },
              component: () => import('@/views/filing-cabinet/add-form-package')
            }
          ]
        },
        {
          path: '/key-words',
          name: 'keyWords',
          meta: {
            title: '关键词检索'
          },
          component: () => import('@/views/key-words')
        },
        {
          path: '/summary-troubleshooting',
          name: 'summaryTroubleshooting',
          mata: {
            title: '摘要排查'
          },
          component: () => import('@/views/summary-troubleshooting')
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      meta: {
        title: '404页面'
      },
      component: () => import('@/views/404')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({
      name: from.name
    }) : next('/404')
  } else {
    // 如果匹配正常跳转
    next()
  }
})
export default router
