import {connect} from 'react-redux';
import Home from '../../page/home/index';
import * as actions from '../../store/actions/recommend';
export function mapStateToProps(state: object) {
  return state;
}

export function mapDispatchToProps(dispatch: any) {
  return {
    fetchRemmendList: () => dispatch(actions.fetchRecommend())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);