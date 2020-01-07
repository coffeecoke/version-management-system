const Mock = require('mockjs')
// const Random = Mock.Random
// 用户登录
const getUserInfo = function () {
  return {
    status: '1',
    userName: 'tanghuan',
    token: 'tanghuan123456'
    // msg: '请求失败'
  }
}
Mock.mock('/api/user/getUserInfo', /post|get/i, getUserInfo)
