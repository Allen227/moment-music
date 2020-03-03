import {connect} from 'react-redux';
import Home from '../../page/home/index';
import * as actions from '../../store/actions';

export function mapStateToProps(state: object) {
  return state;
}

export function mapDispatchToProps(dispatch: any) {
  return {
    stopMusic: () => dispatch(actions.stopMusic()),
    playMusic: () => dispatch(actions.playMusic())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);