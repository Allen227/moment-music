import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as actions from '../../const';
import server from '../../server/api';
import {message} from 'antd';
import {requestActionType, playlistDetailType} from '../../types/index';

const fetchPlaylistDetailStart = (payload: undefined): requestActionType => {
  return {
    type: actions.FETCH_PLAYLIST_DETAIL.START,
    payload
  }
};

const fetchPlaylistDetailSuccess = (payload: playlistDetailType): requestActionType => {
  return {
    type: actions.FETCH_PLAYLIST_DETAIL.SUCCESS,
    payload
  }
};

const fetchPlaylistDetailError = (payload: object): requestActionType => ({
  type: actions.FETCH_PLAYLIST_DETAIL.ERROR,
  payload
});

const fetchPlaylistDetail = (playlistId: number): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    dispatch(fetchPlaylistDetailStart(void 0));
    server.fetch_playlist_detail(playlistId).then((res: object) => {
      dispatch(fetchPlaylistDetailSuccess(res as playlistDetailType));
    }).catch(err => {
      dispatch(fetchPlaylistDetailError(err));
    })
  }
}

const fetchSongUrl = async (songId: number) => {
  const songUrlData: any = await server.fetch_song_url(songId);
  const songUrl = songUrlData.data[0].url;
  if (!songUrl) {
    message.warn('由于版权问题, 该歌曲暂时下架！');
  }
  return songUrl;
}

export {
  fetchPlaylistDetail,
  fetchSongUrl
}