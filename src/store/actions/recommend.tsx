import * as actionTypes from '../../const'

// 获取推荐歌单
const fetchRecommend = (data: object) => {
  return {
    type: actionTypes.GET_RECOMMEND_SONDS,
    data
  }
};

export {
  fetchRecommend
}