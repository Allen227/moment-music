import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as actions from '../../const';
import server from '../../server/api';
import {requestActionType} from '../../types/index';
import {playlistDetailType} from '../../types/index';

const fetchPlaylistDetailSuccess= (payload: playlistDetailType): requestActionType => {
  return {
    type: actions.FETCH_PLAYLIST_DETAIL.SUCCESS,
    payload
  }
};

const fetchPlaylistDetailError= (payload: object): requestActionType => ({
  type: actions.FETCH_PLAYLIST_DETAIL.ERROR,
  payload
});

const fetchPlaylistDetail = (playlistId: number): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    server.fetch_playlist_detail(playlistId).then((res: object) => {
      dispatch(fetchPlaylistDetailSuccess(res as playlistDetailType));
    }).catch(err => {
      dispatch(fetchPlaylistDetailError(err));
    })
  }
}

export {
  fetchPlaylistDetail
}