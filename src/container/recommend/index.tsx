import {connect} from 'react-redux';
import {GET_RECOMMEND_SONDS} from '../../const'
import Recommend from '../../page/Recommend/view/index';
import {fetchRecommend} from '../../store/actions'
import {bindActionCreators} from 'redux';

export interface fetchRecommendInterface {
  type: string,
  data: object
}

const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = (dispatch: any) => {
  return {
      musicInfoActions: () => {
        dispatch(GET_RECOMMEND_SONDS)
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);