import * as actionTypes  from '../../const/index';
import audioPlayer from '../../plugin/audioPlayer';
import {songTrack} from '../../types/index';

function musicPlayer (state: object = {status: false, playIndex: -1}, action: any) {
  const audio = audioPlayer.getInstance();

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
    case actionTypes.MUSIC_PLAYER.PLAY_MUSIC:
      audio.play();
      return Object.assign({}, state, {status: action.payload});
    case actionTypes.MUSIC_PLAYER.STOP_MUSIC:
      audio.pause();
      return Object.assign({}, state, {status: action.payload});
    case actionTypes.MUSIC_PLAYER.SET_SOURCE:
      audio.setSrc(action.payload.songInfo.source);
      inputHistoryTracks(action.payload.songInfo);
      return Object.assign({}, state, action.payload);
    case actionTypes.MUSIC_PLAYER.LOAD_SOURCE:
      audio.load();
    break;
  }
  return state;
}

export default musicPlayer;