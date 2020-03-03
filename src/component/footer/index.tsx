import * as React from 'react';
import './style.pcss';
import SvgIcon from '../svg-icon';

function AppHeader () {
  function playAudio () {

  }

  const nextSongIcon: object = {
    width: 30,
    height: 30,
  }
  return (
    <footer className="app-footer">
      <div className="footer-bg"></div>
      <div className="footer-container">
        <div className="player-control">
          <SvgIcon href="iconshangyige" customStyle={nextSongIcon}/>
          <div className="play-btn" onClick={playAudio}>
            <div className="play-icon"></div>
          </div>
          <SvgIcon href="iconxiayige" customStyle={nextSongIcon}/>
        </div>
      </div>
    </footer>
  )
}

export default AppHeader;