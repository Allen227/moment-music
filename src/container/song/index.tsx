import {connect} from 'react-redux';
import Song from '../../page/song/index';
import * as actions from '../../store/actions';
function mapStateToProps(state: object) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchRemmendTags: () => dispatch(actions.fetchRemmendTags()),
    fetchRecommendDetail: (cat: string) => dispatch(actions.fetchRecommendDetail(cat))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);