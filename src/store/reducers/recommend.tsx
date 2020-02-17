import * as actionTypes from '../../const';
import {requestActionType} from '../../types';


const recommendTags = (state: object = {}, action: requestActionType): object => {
  switch (action.type) {
    case actionTypes.FETCH_RECOMMEND_TAGS.SUCCESS:
      return Object.assign({}, state, action.payload);
  }
  return state;
};

const recommendTagDetail = (state: object = {}, action: requestActionType): object => {
  switch (action.type) {
    case actionTypes.FETCH_RECOMMEND_TAG__DETAIL.SUCCESS:
      return Object.assign({}, state, action.payload);
  }
  return state;
};

export {
  recommendTags,
  recommendTagDetail
};