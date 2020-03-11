import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as actions from '../../const';
import server from '../../server/api';
import {requestActionType} from '../../types/index';
import {} from '../../types/index';
// fetch recommend tags
const fetchSongWordSuccess= (payload: object): requestActionType => {
  return {
    type: actions.FETCH_SONG_WORD.SUCCESS,
    payload
  }
};

const fetchSongWordError= (payload: object): requestActionType => {
  return {
    type: actions.FETCH_SONG_WORD.ERROR,
    payload
  }
};

const fetchSongWord = (songId: number): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    server.fetch_song_word(songId).then(res => {
      dispatch(fetchSongWordSuccess(res));
    }).catch(err => {
      dispatch(fetchSongWordError(err));
    });
  }
}

export {
  fetchSongWord
}