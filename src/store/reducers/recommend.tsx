import * as actionTypes from '../../const';
import {recommendListType} from '../actions/recommend';


const recommendList = (state: object = {}, action: recommendListType): object => {
  switch (action.type) {
    case actionTypes.FETCH_RECOMMEND_SOUNDS.SUCCESS:
      return Object.assign({}, state, action.payload);
  }
  return state;
};
export {
  recommendList
};