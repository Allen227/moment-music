import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as actions from '../../const';
import server from '../../server/api';
import {requestActionType} from '../../types/index';

const fetchDetailSuccess= (payload: object): requestActionType => ({
  type: actions.FETCH_RECOMMEND_TAG__DETAIL.SUCCESS,
  payload
});

const fetchDetailError= (payload: object): requestActionType => ({
  type: actions.FETCH_RECOMMEND_TAG__DETAIL.ERROR,
  payload
});

const fetchRecommendDetail = (cat: string): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    server.fetch_recommend_tags_detail(cat).then(res => {
      dispatch(fetchDetailSuccess(res));
    }).catch(err => {
      dispatch(fetchDetailError(err));
    })
  }
}

export {
  fetchDetailSuccess,
  fetchDetailError,
  fetchRecommendDetail
}