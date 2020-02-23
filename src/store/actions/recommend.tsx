import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as actions from '../../const';
import server from '../../server/api';
import {requestActionType} from '../../types/index';
import {recommendTagDetailType, detailType} from '../../types/index';
// fetch recommend tags
const fetchTagsSuccess= (payload: object): requestActionType => {
  return {
    type: actions.FETCH_RECOMMEND_TAGS.SUCCESS,
    payload
  }
};

const fetchTagsError= (payload: object): requestActionType => {
  return {
    type: actions.FETCH_RECOMMEND_TAGS.ERROR,
    payload
  }
};

const fetchRemmendTags = (): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    server.fetch_recommend_tags().then(res => {
      dispatch(fetchTagsSuccess(res));
    }).catch(err => {
      dispatch(fetchTagsError(err));
    });
  }
}
// fetch recommend details according to tag selected
const fetchDetailSuccess= (payload: recommendTagDetailType): requestActionType => {
  let filteredStack: Array<detailType> = [];
  if (payload.code === 200) {
    payload.playlists.forEach((item) => {
      if (!filteredStack.find((el: detailType) => el.id === item.id)) {
        filteredStack.push(item)
      }
    });
 }
  return {
    type: actions.FETCH_RECOMMEND_TAG__DETAIL.SUCCESS,
    payload: {
      playlists: filteredStack
    }
  }
};

const fetchDetailError= (payload: object): requestActionType => ({
  type: actions.FETCH_RECOMMEND_TAG__DETAIL.ERROR,
  payload
});

const fetchRecommendDetail = (cat: string): ThunkAction<void, null, null, Action<string>> => {
  return dispatch => {
    server.fetch_recommend_tags_detail(cat).then((res: object) => {
      dispatch(fetchDetailSuccess(res as recommendTagDetailType));
    }).catch(err => {
      dispatch(fetchDetailError(err));
    })
  }
}

export {
  fetchRemmendTags,
  fetchRecommendDetail
}