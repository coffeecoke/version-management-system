/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
// import store from '../store/index'
/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */

const tip = msg => {
  Message({
    message: msg,
    type: 'error',
    showClose: true
  })
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */

const toLogin = () => {
  // 判断域名 外网调到微信扫码页  其他的统一跳转到用户名密码登录
  if (window.location.origin === 'http://cloud.chinaresoft.com') {
    router.replace({
      path: '/wxCodePage',
      query: {
        redirect: router.currentRoute.fullPath // 登录成功后跳转到之前的页面
      }
    })
  } else {
    router.replace({
      path: '/login',
      query: {
        redirect: router.currentRoute.fullPath // 登录成功后跳转到之前的页面
      }
    })
  }
}

// const toWxLogin = () => {
//   router.replace({
//     path: '/wxCodePage'
//   })
// }

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, msg) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case '1001':
      localStorage.removeItem('token')
      setTimeout(() => {
        toLogin()
      })
      break
      // 403 token过期
      // 清除token并跳转登录页
    case '1002':
      tip('用户名密码错误')
      localStorage.removeItem('token')
      setTimeout(() => {
        toLogin()
      })
      break
    case '1003':
      tip('登录过期，请重新登录')
      // store.commit('loginSuccess', null)
      localStorage.removeItem('token')
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
      // 参数code读取错误
    case '1201':
      tip(msg)
      localStorage.removeItem('token')
      break
      // 通过微信API获取【TOKEN】失败
    case '1202':
      tip(msg)
      localStorage.removeItem('token')
      setTimeout(() => {
        toLogin()
      })
      break
      // 通过微信API获取微信用户信息失败！
    case '1203':
      tip(msg)
      localStorage.removeItem('token')
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
      // 通过微信API获取微信用户信息（UnionID）失败！
    case '1204':
      tip(msg)
      localStorage.removeItem('token')
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
      // 微信认证未通过
    case '1207':
      tip(msg)
      localStorage.removeItem('token')
      setTimeout(() => {
        // toWxLogin()
        toLogin()
      })
      break
      // 注册信息提交失败
    case '1212':
      tip(msg)
      localStorage.removeItem('token')
      setTimeout(() => {
        // toWxLogin()
        toLogin()
      })
      break

      // 404请求不存在
    case '404':
      tip('请求的资源不存在')
      break
    default:
      tip(msg)
  }
}

// 创建axios实例
var instance = axios.create({timeout: 1000 * 60}) // 设置请求超时时间
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
// instance.defaults.headers.token = '6S2Ng1VO3ifU6fqGUmKNmRpJPEUSzIjI' // 临时设置cookie测试用
instance.defaults.baseURL = '/api'

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    // const token = store.state.token
    const token = localStorage.getItem('token')
    token && (config.headers.token = token)
    return config
  },
  error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功

  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const { response } = error
    if (response) {
      console.log(response)
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.data.code, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false)
    }
  })
export default instance
