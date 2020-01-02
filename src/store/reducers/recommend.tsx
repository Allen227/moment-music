import * as actionTypes from '../../const';
import {recommendListType} from '../actions/recommend';
import {recommendStore} from '../../types/index';
import service from '../../server/api';

let initialRecommend = {};

const fetchRecommend = (state: object | undefined, action: recommendListType): object => {
  switch (action.type) {
    case actionTypes.FETCH_RECOMMEND_SOUNDS.START:
      return {...state, recommendList: service.recommend_list()};
  }
  return initialRecommend;
};
export {
  fetchRecommend
};