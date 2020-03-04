import {combineReducers} from 'redux';
import {recommendTags, recommendTagDetail} from './recommend';
import {playlistDetail, songUrl} from './playlist';
import audioPlayer from './audio';
import {playTracks} from './base';

export default combineReducers({
  recommendTags,
  recommendTagDetail,
  playlistDetail,
  songUrl,
  audioPlayer,
  playTracks
});