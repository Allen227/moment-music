import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as actions from '../../const';
import server from '../../server/api';
import {requestActionType} from '../../types/index';
import {} from '../../types/index';
// fetch recommend tags
const fetchLyricSuccess= (payload: object): requestActionType => {
  return {
    type: actions.FETCH_LYRIC.SUCCESS,
    payload
  }
};

const fetchLyricError= (payload: object): requestActionType => {
  return {
    type: actions.FETCH_LYRIC.ERROR,
    payload
  }
};

const fetchLyric = (songId: number): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    server.fetch_lyric(songId).then(res => {
      dispatch(fetchLyricSuccess(res));
    }).catch(err => {
      dispatch(fetchLyricError(err));
    });
  }
}

export {
  fetchLyric
}