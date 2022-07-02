import request from '@/util/request'

export const getSuggestList = q => { // q搜索关键词
  return request({
    url: 'suggestion',
    params: {
      q
    }
  })
}

// eslint-disable-next-line camelcase
export const getSearchResult = ({ page = 1, per_page, q }) => {
  return request({
    url: 'search',
    params: { page, per_page, q }
  })
}
