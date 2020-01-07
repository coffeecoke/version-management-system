
import axios from '@/utils/http' // 导入http中创建的axios实例
import Qs from 'qs'
const userInfo = {
  // 获取用户权限
  getUserInfo (params) {
    return axios({
      method: 'post',
      url: '/user/getUserInfo',
      data: Qs.stringify(params)
    })
  }
}
export default {
  userInfo: userInfo
}
