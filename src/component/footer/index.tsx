import * as React from 'react';
import './style.pcss';
import SvgIcon from '../svg-icon';

interface Props {
  status: boolean,
  stopMusic: Function,
  playMusic: Function,
}

function AppHeader ({status, stopMusic, playMusic}: Props) {
  function switchPlayer () {
    if (status) {
      stopMusic();
    } else {
      playMusic();
    }
  }
  const nextSongIcon: object = {
    width: 30,
    height: 30,
  }
  let statusClass = ['play-icon'];
  if (status) {
    statusClass.push('active')
  }

  function getCurrentSongIndex () {
  }

  function playPreSong () {
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