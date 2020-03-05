import * as React from 'react';
import './style.pcss';
import SvgIcon from '../svg-icon';
import {curSongInfo, songTrack} from '../../types/index';

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

  function playPreSong () {
    let curSongIdx = getCurrentSongIndex();
    if (curSongIdx > 0) {
      if (playTracks[curSongIdx - 1].source) {
        console.log(playTracks[curSongIdx - 1])
        setSource(playTracks[curSongIdx - 1]);
        playMusic();
        setStatus(true);
      }
    }
  }

  function playNextSong () {

  }

  return (
    <footer className="app-footer">
      <div className="footer-bg"></div>
      <div className="footer-container">
        <div className="player-control">
          <SvgIcon href="iconshangyige" customStyle={nextSongIcon} event={playPreSong}/>
          <div className="play-btn" onClick={switchPlayer}>
            <div className={statusClass.join(' ')}></div>
          </div>
          <SvgIcon href="iconxiayige" customStyle={nextSongIcon} event={playNextSong}/>
        </div>
      </div>
    </footer>
  )
}

export default AppHeader;