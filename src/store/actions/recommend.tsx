import * as actionTypes from '../../const';

export interface recommendListType {
  type: actionTypes.GET_RECOMMEND_SONDS
}

// 获取推荐歌单
const fetchRemmendList = (): recommendListType => {
  return {
    type: actionTypes.GET_RECOMMEND_SONDS
  }
};

export {
  fetchRemmendList
}