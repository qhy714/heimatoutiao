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

// 获取所有的频道列表数据
export const getAllArticleList = () => {
  return request({
    url: 'channels'
  })
}

// 频道数据持久化
export const saveChannels = (channels) => {
  return request({
    url: 'user/channels',
    method: 'PUT',
    data: {
      channels
    }
  })
}
