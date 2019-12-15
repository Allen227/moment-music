import * as actionTypes from '../../const';
import {recommendListType} from '../actions/recommend';
import {recommendStore} from '../../types/index'

let initialRecommend = {
  recommendList: []
}

const fetchRecommend = (state: recommendStore | undefined, action: recommendListType): recommendStore => {
  switch (action.type) {
    case actionTypes.GET_RECOMMEND_SONDS:
      return state === void 0 ? initialRecommend : {recommendList: [{test: 123}]};
    default:
      return initialRecommend;
  }
};
export {
  fetchRecommend
};