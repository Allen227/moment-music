import {combineReducers} from 'redux';
import {recommendTags, recommendTagDetail} from './recommend';
import {playlistDetail, songUrl} from './playlist';
import audioPlayer from './audio';
export default combineReducers({
  recommendTags,
  recommendTagDetail,
  playlistDetail,
  songUrl,
  audioPlayer
});