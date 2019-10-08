import * as actionTypes from '../../const';

interface actionInterfact {
  type: string,
  data: object
};

const fetchRecommend = (state = {}, action: actionInterfact) => {
  switch (action.type) {
    case actionTypes.GET_RECOMMEND_SONDS:
      return action.data;
    default:
      return state
  }
};

export {
  fetchRecommend
};