import * as React from 'react';
import './style.pcss';
import SvgIcon from '../svg-icon';
import {curSongInfo, songTrack} from '../../types/index';
import { Slider } from 'antd';

interface Props {
  status: boolean,
  stopMusic: Function,
  playMusic: Function,
  loadSource: Function,
  setSource: Function,
  curSongInfo: curSongInfo,
  playTracks: Array<songTrack>,
  setStatus: Function
}

function AppHeader ({setStatus, status, stopMusic, playMusic, curSongInfo, playTracks, loadSource, setSource}: Props) {
  function switchPlayer () {
    if (status) {
      stopMusic();
    } else {
      playMusic();
    }
  }
  const nextSongIcon: object = {
    width: 32,
    height: 32,
  }
  let statusClass = ['play-icon'];
  if (status) {
    statusClass.push('active')
  }

  function getCurrentSongIndex () {
    return playTracks.findIndex(el => el.id === curSongInfo.id);
  }

  function playPreSong (curSongIdx: number) {
    if (curSongIdx > 0) {
      setSource(playTracks[curSongIdx - 1]);
    }
  }

  function playNextSong (curSongIdx: number) {
    if (curSongIdx < playTracks.length - 1) {
      setSource(playTracks[curSongIdx + 1]);
    }
  }

  function controlPreOrNext (type: number) {
    let curSongIdx = getCurrentSongIndex();
    if (type === -1) {
      playPreSong(curSongIdx)
    } else if (type === 1) {
      playNextSong(curSongIdx);
    }
    playMusic();
    setStatus(true);
  }

  return (
    <footer className="app-footer">
      <div className="footer-bg"></div>
      <div className="footer-container">
        <div className="player-control">
          <SvgIcon href="iconshangyige" customStyle={nextSongIcon} event={() => controlPreOrNext(-1)}/>
          <div className="play-btn" onClick={switchPlayer}>
            <div className={statusClass.join(' ')}></div>
          </div>
          <SvgIcon href="iconxiayige" customStyle={nextSongIcon} event={() => controlPreOrNext(1)}/>
        </div>
        <div className="slide-bar">
          <Slider defaultValue={30} />
        </div>
      </div>
    </footer>
  )
}

export default AppHeader;