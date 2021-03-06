import * as actionTypes from '../../const';
import {requestActionType} from '../../types';

const rankList = (state: object = {}, action: requestActionType): object => {
  switch (action.type) {
    case actionTypes.FETCH_RANK_LIST.SUCCESS:
      return Object.assign({}, state, action.payload);
  }
  return state;
};

export {
  rankList
};