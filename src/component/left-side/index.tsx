import * as React from 'react';
import './style.pcss';
import {songTrack, curSongInfo} from '../../types/index';
import parseTime from '../../plugin/parseTime';
import { Scrollbars } from 'react-custom-scrollbars';
import SvgIcon from '../../component/svg-icon';
import {message} from 'antd';
interface Props {
  curSongInfo: curSongInfo,
  playMusic: Function,
  loadSource: Function,
  setSource: Function,
  setStatus: Function,
  fetchSongUrl: Function
}

function LeftSide ({curSongInfo, fetchSongUrl, loadSource, setSource, setStatus, playMusic}: Props) {
  const historyList = localStorage.getItem('songTracks');
  let trackList;

  async function playCurSong (track: any) {
    const songUrlData = await fetchSongUrl(track.id);
    if (!!songUrlData.data[0].url) {
      const songInfo = {
        id: track.id,
        name: track.name,
        picUrl: track.picUrl,
        source: songUrlData.data[0].url,
        player: track.player,
        dt: track.dt
      };
      setSource(songInfo);
      loadSource();
      playMusic();
      setStatus(true);
    } else {
      message.warn('歌曲不存在');
    }
  }
  if (historyList) {
    trackList = JSON.parse(historyList).map((track: songTrack) => {
      return (
        <li className="list-item" key={track.id} onClick={() => {playCurSong(track)}}>
          <span className="song-name text-overflow">{track.name}</span>
          <span className="song-time">{parseTime(track.dt)}</span>
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
  return (
    <aside className="left-side">
      <h2 className="title">播放列表</h2>
      <div className="track-container" style={playListStyle}>
        <Scrollbars style={{ width: '100%', height: '100%' }} autoHide>
          <ul className="track-list">
            {trackList}
          </ul>
        </Scrollbars>
      </div>
      <div className={curSongBoxClass.join(' ')}>
        <SvgIcon href="iconfangda" event={() => {}}/>
        <img className="music-img" src={curSongInfo.picUrl}></img>
        <div className="music-info">
          <h3 className="music-title text-overflow">{curSongInfo.name}</h3>
          <span className="music-time">{curSongInfo.player}&nbsp;&nbsp;&nbsp;{parseTime(curSongInfo.dt)}</span>
        </div>
      </div>
    </aside>
  )
}

export default LeftSide;