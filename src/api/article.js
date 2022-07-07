import request from '@/util/request'

export const getArticle = (article_id) => {
  return request({
    url: `/articles/${article_id}`
  })
}

export const addUser = (target) => {
  return request({
    method: 'POST',
    url: 'user/followings',
    data: {
      target
    }
  })
}

export const delUser = (target) => {
  return request({
    method: 'DELETE',
    url: `/user/followings/${target}`
  })
}

export const addCollect = (target) => {
  return request({
    method: 'POST',
    url: 'article/collections',
    data: {
      target
    }
  })
}

export const delCollect = (target) => {
  return request({
    method: 'DELETE',
    url: `article/collections/${target}`
  })
}
