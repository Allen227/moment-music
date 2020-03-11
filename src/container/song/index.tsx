import {connect} from 'react-redux';
import Song from '../../page/song/index';
import * as actions from '../../store/actions';
function mapStateToProps(state: object) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchSongWord: (songId: number) => dispatch(actions.fetchSongWord(songId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);