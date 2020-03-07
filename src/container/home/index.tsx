import {connect} from 'react-redux';
import Home from '../../page/home/index';
import * as actions from '../../store/actions';

export function mapStateToProps(state: object) {
  return state;
}

export function mapDispatchToProps(dispatch: any) {
  return {
    loadSource: () => dispatch(actions.loadSource()),
    setSource: (source: object) => dispatch(actions.setSource(source)),
    stopMusic: () => dispatch(actions.stopMusic()),
    playMusic: () => dispatch(actions.playMusic()),
    setStatus: (status: boolean) => dispatch(actions.setStatus(status)),
    fetchSongUrl: async (songId: number) => await actions.fetchSongUrl(songId)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);