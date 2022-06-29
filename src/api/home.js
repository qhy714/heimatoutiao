import request from '@/util/request'

// 我的频道
export const getMyChannels = () => {
  return request({
    url: 'user/channels'
  })
}
// eslint-disable-next-line camelcase
export const getArticleList = ({ channel_id, timestamp }) => {
  return request({
    url: 'articles',
    params: { channel_id, timestamp }
  })
}
