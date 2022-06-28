import request from '@/util/request'
// 只有在vue组件文件中才能用this.$store 在js中没有这个this 所以只能
import store from '@/store'
/*
*获取短信验证码
*@param{number}mobile
*@return  promise
*/
export const getSmsCode = (mobile) => {
  return request({
    url: ` /v1_0/sms/codes/${mobile}`
  })
}

export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data: {
      mobile,
      code
    }
  })
}

export const getUserInfo = () => {
  return request({
    url: 'user',
    headers: {
      Authorization: 'Bearer ' + store.state.user.token
    }
  })
}
