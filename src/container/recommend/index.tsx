import {connect} from 'react-redux';
import RecommendList from '../../page/Recommend/view/index';
import * as actions from '../../store/actions/recommend';
import {recommendStore} from '../../types/index';
import {Dispatch} from 'redux';
export function mapStateToProps(state: recommendStore) {
  return {
    recommendList: state && state.recommendList
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.recommendListType>) {
  return {
    fetchRemmendList: () => dispatch(actions.fetchRemmendList())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendList);