import * as actionTypes from '../../const';
import {requestActionType} from '../../types';

const playlistDetail = (state: object = {}, action: requestActionType): object => {
  switch (action.type) {
    case actionTypes.FETCH_PLAYLIST_DETAIL.SUCCESS:
      return Object.assign({}, state, action.payload);
  }
  return state;
};

export {
  playlistDetail
};