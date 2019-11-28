import * as actionTypes from '../../const'

export interface recommendInterface {
  type: string,
  data: object
}

// 获取推荐歌单
const fetchRemmendList = (data: object): recommendInterface => {
  return {
    type: actionTypes.GET_RECOMMEND_SONDS,
    data
  }
};

export {
  fetchRemmendList
}