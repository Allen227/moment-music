import * as actionTypes  from '../../const/index';
import {songTrack, requestActionType} from '../../types/index';

const playTracks = function (state: Array<object> = [], action: any) {
  const songTracks = localStorage.getItem('songTracks');
  let parsedTracks: any[] = [];
  if (songTracks) {
    parsedTracks = JSON.parse(songTracks);
    state = parsedTracks;
  }
  /**
   * push tracks stack on history list
   * @param songInfo the song will push
   */
  function inputHistoryTracks (songInfo: songTrack) {
    if (!parsedTracks.find((track: songTrack) => track.id === songInfo.id)) {
      parsedTracks.push(songInfo);
    }
    localStorage.setItem('songTracks', JSON.stringify(parsedTracks));
    return parsedTracks
  }
  /**
   * delete song in history list
   * @param delIdx delete index of song
   */
  function deleteItemInTracks (delIdx: number) {
    parsedTracks.splice(delIdx, 1);
    localStorage.setItem('songTracks', JSON.stringify(parsedTracks));
    return parsedTracks;
  }

  switch(action.type) {
    case actionTypes.PUSH_TRACKS:
      return inputHistoryTracks(action.payload);
    case actionTypes.DELETE_TRACKS:
      return deleteItemInTracks(action.payload);
  }
  return state;
}

const songUrl = (state: object = {}, action: requestActionType): object => {
  switch (action.type) {
    case actionTypes.FETCH_SONG_URL.SUCCESS:
      return Object.assign({}, state, action.payload);
  }
  return state;
};

export {
  playTracks,
  songUrl
}