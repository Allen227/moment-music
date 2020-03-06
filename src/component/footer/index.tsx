import React, {useState, useEffect} from 'react';
import './style.pcss';
import SvgIcon from '../svg-icon';
import {curSongInfo, songTrack} from '../../types/index';
import { Slider } from 'antd';
import audioPlayer from '../../plugin/audioPlayer';
import parseTime from '../../plugin/parseTime';

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
  const audio = audioPlayer.getInstance();
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
  let [curPlayTime, setPlayTime] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setPlayTime(audio.getCurrentTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  });
  // slide time-bar for change play time
  function changeSlide (t: any) {
    setPlayTime(t);
    stopMusic();
    audio.setCurrentTime(t);
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
          <span className="slide-time">{parseTime(curPlayTime * 1000)}</span>
          <Slider onChange={changeSlide} onAfterChange={() => playMusic()} value={curPlayTime} min={0} max={curSongInfo.dt / 1e3} tipFormatter={null}/>
          <span className="slide-time">{parseTime(curSongInfo.dt)}</span>
        </div>
      </div>
    </footer>
  )
}

export default AppHeader;