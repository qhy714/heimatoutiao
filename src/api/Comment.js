import request from '@/util/request'

// 评论列表
export const getCommentList = ({ type, source, offset, limit }) => {
  return request({
    url: 'comments',
    params: {
      type, // 评论类型
      source,
      offset,
      limit
    }
  })
}

// 点赞
export const addLike = (target) => {
  return request({
    method: 'POST',
    url: 'comment/likings',
    data: {
      target
    }
  })
}

// 取消点赞
export const delLike = (target) => {
  return request({
    method: 'DELETE',
    url: `comment/likings/${target}`
  })
}

export const addComment = (data) => {
  return request({
    method: 'POST',
    url: 'comments',
    data
  })
}
