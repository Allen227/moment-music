import * as actionTypes  from '../../const/index';
import audioPlayer from '../../plugin/audioPlayer';

function curSongInfo (state: object = {}, action: any) {
  const audio = audioPlayer.getInstance();
  const localSongInfo = localStorage.getItem('curSongInfo');
  let parsedSongInfo;
  if (localSongInfo) {
    parsedSongInfo = JSON.parse(localSongInfo);
  }

  switch(action.type) {
    case actionTypes.MUSIC_PLAYER.PLAY_MUSIC:
      // set default song source
      if (!audio.src && localSongInfo) {
        audio.src = parsedSongInfo.source;
      }
      audio.play();
      return Object.assign({}, state, {status: action.payload});
    case actionTypes.MUSIC_PLAYER.STOP_MUSIC:
      audio.pause();
      return Object.assign({}, state, {status: action.payload});
    case actionTypes.MUSIC_PLAYER.SET_SOURCE:
      audio.src = action.payload.source;
      localStorage.setItem('curSongInfo', JSON.stringify(action.payload));
      return Object.assign({}, state, action.payload)
    case actionTypes.MUSIC_PLAYER.LOAD_SOURCE:
      audio.load();
    break;
    case actionTypes.MUSIC_PLAYER.SET_PLAY_INDEX:
      return Object.assign({}, state, {playIndex: action.payload});
    case actionTypes.MUSIC_PLAYER.SET_STATUS:
        return Object.assign({}, state, {status: action.payload});
  }
  return Object.assign({}, state, parsedSongInfo);
}

export {
  curSongInfo
}