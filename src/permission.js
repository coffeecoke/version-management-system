import router from './router'
// import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress configuration

const whiteList = ['/login', '/wxCodePage', '/register'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  let token = localStorage.getItem('token')
  if (token) {
    if (to.path === '/wxCodePage' || to.path === '/login') {
      next({ path: '/' }) // 直接跳转到默认页面（如：首页）
      NProgress.done() //
    } else {
      next() // 正常路由跳转
      // if (store.getters.roles.length === 0) {
      //   store.dispatch('GetInfo').then(res => { // 拉取用户信息
      //     next()
      //   }).catch((err) => {
      //     store.dispatch('FedLogOut').then(() => {
      //       Message.error(err || 'Verification failed, please login again')
      //       next({ path: '/' })
      //     })
      //   })
      // } else {
      //   next()
      // }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 直接跳转到白名单配置的路由
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
// 在有token的情况下:
// 1 如果要进去的路由是登录页，则直接调转到默认页面 path:'/'
// 2 如果不是登录页，正常跳转 next()

// 在没有token的情况下
// 1 如果是白名单里配置的路由，直接跳转到白名单
// 2 如果不是，直接重定向到登录页，并带上redirect,方便登录成功后直接调转到目标页面，用户体验好
