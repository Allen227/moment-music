import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as actions from '../../const';
import server from '../../server/api';
import {requestActionType} from '../../types/index'

const fetchTagsSuccess= (payload: object): requestActionType => ({
  type: actions.FETCH_RECOMMEND_TAGS.SUCCESS,
  payload
});

const fetchTagsError= (payload: object): requestActionType => ({
  type: actions.FETCH_RECOMMEND_TAGS.ERROR,
  payload
});

const fetchRemmendTags = (): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    server.fetch_recommend_tags().then(res => {
      dispatch(fetchTagsSuccess(res));
    }).catch(err => {
      dispatch(fetchTagsError(err));
    });
  }
}

export {
  fetchTagsSuccess,
  fetchTagsError,
  fetchRemmendTags
}