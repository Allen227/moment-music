import * as React from 'react';
import './style.pcss';
import {songTrack} from '../../types/index';
import parseTime from '../../plugin//parseTime';
import { Scrollbars } from 'react-custom-scrollbars';

function LeftSide () {
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
  return (
    <aside className="left-side">
      <h2 className="title">播放列表</h2>
      <div className="track-container">
        <Scrollbars style={{ width: '100%', height: '100%' }} autoHide>
          <ul className="track-list">
            {trackList}
          </ul>
        </Scrollbars>
      </div>
    </aside>
  )
}

export default LeftSide;