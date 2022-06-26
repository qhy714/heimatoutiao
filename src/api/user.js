import request from '@/util/request'
/*
*获取短信验证码
*@param{number}mobile
*@return  promise
*/
export const gerSmsCode = (mobile) => {
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
