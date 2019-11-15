import * as actionTypes from '../../const';

interface actionInterfact {
  type: string,
  data: object
};

const fetchRecommend = (state = {}, action: actionInterfact) => {
  console.log(123)
  return 123
  /* switch (action.type) {
    case actionTypes.GET_RECOMMEND_SONDS:
      return state;
  } */
};
export {
  fetchRecommend
};