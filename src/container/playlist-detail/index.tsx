import {connect} from 'react-redux';
import PlaylistDetail from '../../page/playlist-detail/index';
import * as actions from '../../store/actions';

function mapStateToProps (state: object) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchPlaylistDetail: (playlistId: number) => dispatch(actions.fetchPlaylistDetail(playlistId)),
    fetchSongUrl: async (songId: number) => await actions.fetchSongUrl(songId)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);