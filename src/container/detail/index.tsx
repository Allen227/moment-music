import {connect} from 'react-redux';
import Detail from '../../page/detail/index';
import * as actions from '../../store/actions';
import {songTrack} from '../../types/index';
import {message} from 'antd';

function mapStateToProps (state: object) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchPlaylistDetail: (playlistId: number) => dispatch(actions.fetchPlaylistDetail(playlistId)),
    fetchSongUrl: async (songId: number) => await actions.fetchSongUrl(songId),
    playMusic: () => dispatch(actions.playMusic()),
    loadSource: () => dispatch(actions.loadSource()),
    setSource: (source: object) => dispatch(actions.setSource(source)),
    setLoop: () => dispatch(actions.setLoop()),
    pushPlayTracks: (track: songTrack) => dispatch(actions.pushPlayTracks(track)),
    setStatus: (status: boolean) => dispatch(actions.setStatus(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);