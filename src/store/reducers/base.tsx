import * as actionTypes  from '../../const/index';
import {songTrack} from '../../types/index';

const playTracks = function (state: Array<object> = [], action: any) {
  const localTracks = localStorage.getItem('songTracks');
  let parsedTracks;
  if (localTracks) {
    parsedTracks = JSON.parse(localTracks);
    state = parsedTracks;
  }
  function inputHistoryTracks (songInfo: songTrack) {
    const songTracks = localStorage.getItem('songTracks');
    let parsedTracks = [];
    if (songTracks) {
      parsedTracks = JSON.parse(songTracks);
    }
    if (!parsedTracks.find((track: songTrack) => track.id === songInfo.id)) {
      parsedTracks.push(songInfo);
    }
    localStorage.setItem('songTracks', JSON.stringify(parsedTracks));
  }

  switch(action.type) {
    case actionTypes.PUSH_TRACKS:
      inputHistoryTracks(action.payload);
      return parsedTracks.concat(action.payload)
  }
  return state;
}

export {
  playTracks
}