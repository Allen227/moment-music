import {combineReducers} from 'redux';
import {recommendTags, recommendTagDetail} from './recommend';
export default combineReducers({
  recommendTags,
  recommendTagDetail
});