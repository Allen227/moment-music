import React from 'react';
import './style.pcss';
import {songTrack, curSongInfoType} from '../../../../types/index';
import parseTime from '../../../../plugin/parseTime';
import { Scrollbars } from 'react-custom-scrollbars';
import SvgIcon from '../../../../component/svg-icon';
import {useHistory} from 'react-router-dom';
interface Props {
  curSongInfo: curSongInfoType,
  playMusic: Function,
  loadSource: Function,
  setSource: Function,
  setStatus: Function,
  fetchSongUrl: Function,
  customStyle: object,
  playTracks: Array<songTrack>,
  deleteTrack: Function
}

function LeftSide ({deleteTrack, curSongInfo, fetchSongUrl, loadSource, setSource, setStatus, playMusic, customStyle, playTracks}: Props) {
  const historyList = localStorage.getItem('songTracks');
  let trackListDom;
  const history = useHistory();
  /**
   * play current song
   * @param track the song information that will play
   */
  async function playCurSong (track: any) {
    const songUrl = await fetchSongUrl(track.id);
    if (!!songUrl) {
      const songInfo = {
        id: track.id,
        name: track.name,
        picUrl: track.picUrl,
        source: songUrl,
        player: track.player,
        dt: track.dt
      };
      setSource(songInfo);
      loadSource();
      playMusic();
      setStatus(true);
    }
  }
  /**
   * delete item in history list
   * @param index delete index
   */
  function deleteTrackItem (index: number) {
    deleteTrack(index);
  }
  // get tracks node when historyList is valid
  if (historyList) {
    trackListDom = playTracks.map((track: songTrack, index: number) => {
      return (
        <li className="list-item" key={track.id} onClick={() => {playCurSong(track)}}>
          <span className="song-name text-overflow">{track.name}</span>
          <span className="song-time">{parseTime(track.dt)}</span>
          <SvgIcon href="iconlajitong" event={() => {deleteTrackItem(index)}}/>
        </li>
      )
    })
  }
  let curSongBoxClass = ['cur-music-box'];
  let playListStyle;
  if (!!curSongInfo.id) {
    curSongBoxClass.push('active');
  } else {
    playListStyle = {
      height: 'calc(100% - 40px)'
    }
  }
  function jumpSongPage () {
    history.push({
      pathname: '/song',
      state: {
        id: curSongInfo.id
      }
    })
  }
  return (
    <aside className="left-side" style={customStyle}>
      <h2 className="title" style={customStyle}>播放列表</h2>
      <div className="track-container" style={playListStyle}>
        <Scrollbars style={{ width: '100%', height: '100%' }} autoHide>
          <ul className="track-list">
            {trackListDom}
          </ul>
        </Scrollbars>
      </div>
      <div className={curSongBoxClass.join(' ')} style={customStyle}>
        <SvgIcon href="iconfangda" event={jumpSongPage}/>
        <img className="music-img" src={`${curSongInfo.picUrl}?param=60y60`} alt="song-cover"></img>
        <div className="music-info">
          <h3 className="music-title text-overflow">{curSongInfo.name}</h3>
          <span className="music-time" style={customStyle}>{curSongInfo.player}&nbsp;&nbsp;&nbsp;{parseTime(curSongInfo.dt)}</span>
        </div>
      </div>
    </aside>
  )
}

export default LeftSide;