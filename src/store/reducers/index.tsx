import {combineReducers} from 'redux';
import {recommendTags, recommendTagDetail} from './recommend';
import {playlistDetail} from './playlist';
import {curSongInfo} from './audio';
import {playTracks, songUrl} from './base';

export default combineReducers({
  recommendTags,
  recommendTagDetail,
  playlistDetail,
  songUrl,
  curSongInfo,
  playTracks
});