import {connect} from 'react-redux';
import Rank from '../../page/rank/index';
import * as actions from '../../store/actions';
function mapStateToProps(state: object) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchRankList: () => dispatch(actions.fetchRankList()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rank);