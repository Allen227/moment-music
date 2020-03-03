import {connect} from 'react-redux';
import PlaylistDetail from '../../page/playlist-detail/index';
import * as actions from '../../store/actions';

function mapStateToProps (state: object) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchPlaylistDetail: (playlistId: number) => dispatch(actions.fetchPlaylistDetail(playlistId)),
    fetchSongUrl: async (songId: number) => await actions.fetchSongUrl(songId),
    playMusic: () => dispatch(actions.playMusic()),
    loadSource: () => dispatch(actions.loadSource()),
    setSource: (source: string) => dispatch(actions.setSource(source))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);