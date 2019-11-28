import {connect} from 'react-redux';
import RecommendList from '../../page/Recommend/view/RecommendList';
import * as RecommendAction from '../../store/actions/recommend'
import {bindActionCreators} from 'redux';
interface actionType {
  recommendActions: any
}
const mapDispatchToProps = (dispatch: any): object => {
  let actions: actionType = {
      recommendActions: bindActionCreators<any, any>(RecommendAction, dispatch)
  }
  return actions
};

export default connect(mapDispatchToProps)(RecommendList);