import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as actions from '../../const';
import server from '../../server/api';
import {requestActionType} from '../../types/index';

const fetchRankListError= (payload: object): requestActionType => {
  return {
    type: actions.FETCH_RANK_LIST.ERROR,
    payload
  }
};

const fetchRankListSuccess= (payload: object): requestActionType => {
  return {
    type: actions.FETCH_RANK_LIST.SUCCESS,
    payload
  }
};

const fetchRankList = (): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    server.fetch_rank_list().then(res => {
      dispatch(fetchRankListSuccess(res));
    }).catch(err => {
      dispatch(fetchRankListError(err));
    });
  }
}

export {
  fetchRankList
}