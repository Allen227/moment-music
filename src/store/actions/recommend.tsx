import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as actions from '../../const';
import server from '../../server/api';

export interface recommendListType {
  type: string,
  payload: object
}

const fetchRecommendSuccess= (payload: object): recommendListType => ({
  type: actions.FETCH_RECOMMEND_SOUNDS.SUCCESS,
  payload
});

const fetchRecommendError= (payload: object): recommendListType => ({
  type: actions.FETCH_RECOMMEND_SOUNDS.ERROR,
  payload
});

const fetchRecommend = (): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    server.fetch_recommend_list().then(res => {
      dispatch(fetchRecommendSuccess(res));
    }).catch(err => {
      dispatch(fetchRecommendError(err));
    })
  }
}

export {
  fetchRecommendSuccess,
  fetchRecommendError,
  fetchRecommend
}