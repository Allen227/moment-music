import * as actionTypes from '../../const';

interface recommendInterface {
  type: string,
  data: object
};

const fetchRecommend = (state = {}, action: recommendInterface) => {
  switch (action.type) {
    case actionTypes.GET_RECOMMEND_SONDS:
      return state;
    default:
      return state;
  }
};
export {
  fetchRecommend
};