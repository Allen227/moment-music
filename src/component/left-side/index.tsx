import * as React from 'react';
import './style.pcss';
import {songTrack} from '../../types/index';
import parseTime from '../../plugin/parseTime';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  curSongInfo: songTrack
}

function LeftSide ({curSongInfo}: Props) {
  const historyList = localStorage.getItem('songTracks');
  let trackList;
  if (historyList) {
    trackList = JSON.parse(historyList).map((track: songTrack) => {
      return (
        <li className="list-item" key={track.id}>
          <span className="song-name">{track.name}</span>
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
        <img className="music-img" src={curSongInfo.picUrl}></img>
        <div className="music-info">
          <h3 className="music-title">{curSongInfo.name}</h3>
          <span className="music-time">{curSongInfo.player}&nbsp;&nbsp;&nbsp;{parseTime(curSongInfo.dt)}</span>
        </div>
      </div>
    </aside>
  )
}

export default LeftSide;