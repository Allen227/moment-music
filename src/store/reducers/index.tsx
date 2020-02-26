import {combineReducers} from 'redux';
import {recommendTags, recommendTagDetail} from './recommend';
import {playlistDetail, songUrl} from './playlist';
export default combineReducers({
  recommendTags,
  recommendTagDetail,
  playlistDetail,
  songUrl
});