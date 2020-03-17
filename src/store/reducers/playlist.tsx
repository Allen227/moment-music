import * as actionTypes from '../../const';
import {requestActionType} from '../../types';

const playlistDetail = (state: object = {}, action: requestActionType): object | undefined => {
  switch (action.type) {
    case actionTypes.FETCH_PLAYLIST_DETAIL.SUCCESS:
      return Object.assign({}, state, action.payload);
    case actionTypes.FETCH_PLAYLIST_DETAIL.START:
      return {};
  }
  return state;
};

export {
  playlistDetail
};