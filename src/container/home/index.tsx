import {connect} from 'react-redux';
import Home from '../../page/home/index';
export function mapStateToProps(state: object) {
  return state;
}

export function mapDispatchToProps(dispatch: any) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);