
// 获取用户信息
import userInfo from './user'
// 对外暴露所有模块的接口，方便每vue都能调用所有的api
export default Object.assign({},
  userInfo
)
