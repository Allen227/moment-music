import React, {useState} from 'react';
import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
import AppHeader from './component/header';
import AppFooter from './component/footer';
import LeftSide from './component/left-side';
import Rank from '../../container/rank/index';
import Song from '../../container/song/index';
import Detail from '../../container/detail';
import Recommend from '../../container/recommend/index';
import {curSongInfoType, songTrack} from '../../types/index';
import {currentTime, currentTimeContext} from '../../plugin/currentTimeContext';
import './style.pcss';
interface Props {
  playTracks: Array<songTrack>,
  curSongInfo: curSongInfoType,
  playMusic: Function,
  stopMusic: Function,
  loadSource: Function,
  setSource: Function,
  setStatus: Function,
  fetchSongUrl: Function,
  fetchLyric: Function,
  deleteTrack: Function
}
export default function Home({setStatus, curSongInfo, stopMusic, playMusic, playTracks, loadSource, setSource, fetchSongUrl, fetchLyric, deleteTrack}: Props) {
  const [time, setTime] = useState(currentTime);
  function updateCurrentTime (time: any) {
    setTime(time);
  }
  const currentTimeBus: any = {
    value: time,
    update: updateCurrentTime
  }
  // set style on song page
  const isSongRouter = !!useRouteMatch('/song');
  let homeBgStyle = {};
  let invalidStyle = {};
  if (isSongRouter) {
    homeBgStyle = {
      backgroundImage: `url(${curSongInfo.picUrl}?param=${document.body.offsetWidth}y${document.body.offsetHeight})`
    };
    invalidStyle = {
      background: 'none',
      border: 'none',
      color: 'white'
    };
  }
  return (
    <currentTimeContext.Provider value={currentTimeBus}>
      <div className="home-bg" style={homeBgStyle}></div>
      <div className="home">
        <AppHeader customStyle={invalidStyle}/>
        <main className="app-main" style={invalidStyle}>
          <LeftSide deleteTrack={deleteTrack} playTracks={playTracks} customStyle={invalidStyle} curSongInfo={curSongInfo} playMusic={playMusic} loadSource={loadSource} setSource={setSource} setStatus={setStatus} fetchSongUrl={fetchSongUrl}></LeftSide>
            <article className="container" style={invalidStyle}>
              <Switch>
                <Redirect from="/" exact to="/recommend" />
                <Route path="/recommend" component={Recommend} exact></Route>
                <Route path={`/recommend/detail`} component={Detail}></Route>
                <Route path={`/rank/detail`} component={Detail}></Route>
                <Route path="/rank" component={Rank} exact></Route>
                <Route path="/song" component={Song} exact></Route>
              </Switch>
            </article>
        </main>
        <AppFooter customStyle={invalidStyle} status={curSongInfo.status} stopMusic={stopMusic} playMusic={playMusic} playTracks={playTracks} curSongInfo={curSongInfo} setSource={setSource} setStatus={setStatus} fetchSongUrl={fetchSongUrl} fetchLyric={fetchLyric}></AppFooter>
      </div>
    </currentTimeContext.Provider>
  )
};
