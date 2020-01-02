import * as actions from '../../const';

export interface recommendListType {
  type: actions.FETCH_RECOMMEND_SOUNDS_START
}

// 获取推荐歌单
const fetchRemmendList = (): recommendListType => ({
  type: actions.FETCH_RECOMMEND_SOUNDS.START
});

export {
  fetchRemmendList
}