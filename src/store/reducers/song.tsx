import * as actionTypes from '../../const';
import {requestActionType} from '../../types';


const songWord = (state: object = {}, action: requestActionType): object => {
  switch (action.type) {
    case actionTypes.FETCH_SONG_WORD.SUCCESS:
      return Object.assign({}, state, action.payload);
  }
  return state;
};

export {
  songWord
};