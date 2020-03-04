import * as actionTypes  from '../../const/index';
import audioPlayer from '../../plugin/audioPlayer';
import {songTrack} from '../../types/index';

function musicPlayer (state: object = {}, action: any) {
  const audio = audioPlayer.getInstance();


  switch(action.type) {
    case actionTypes.MUSIC_PLAYER.PLAY_MUSIC:
      audio.play();
      return Object.assign({}, state, {status: action.payload});
    case actionTypes.MUSIC_PLAYER.STOP_MUSIC:
      audio.pause();
      return Object.assign({}, state, {status: action.payload});
    case actionTypes.MUSIC_PLAYER.SET_SOURCE:
      audio.setSrc(action.payload);
    case actionTypes.MUSIC_PLAYER.LOAD_SOURCE:
      audio.load();
    break;
    case actionTypes.MUSIC_PLAYER.SET_PLAY_INDEX:
      return Object.assign({}, state, {playIndex: action.payload});

  }
  return state;
}

export default musicPlayer;