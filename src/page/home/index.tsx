import React, {useState, useEffect, Suspense, lazy} from 'react';
import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
import AppHeader from './component/header';
import AppFooter from './component/footer';
import LeftSide from './component/left-side';

import {curSongInfoType, songTrack} from '../../types/index';
import {currentTime, currentTimeContext} from '../../plugin/currentTimeContext';
import './style.pcss';

const Rank = lazy(() => import('../../container/rank/index'));
const Song = lazy(() => import('../../container/song/index'));
const Detail = lazy(() => import('../../container/detail'));
const Recommend = lazy(() => import('../../container/recommend/index'));
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
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  function updateCurrentTime (time: any) {
    console.log(time);
    setTime(time);
  }
  // mounted on state for response update
  const currentTimeBus: any = {
    value: time,
    update: updateCurrentTime
  }
  let homeBgStyle = {};
  let invalidStyle = {};
  const isSongRouter = !!useRouteMatch('/song');
  useEffect(() => {
    setScreenWidth(document.body.offsetWidth / 3.9);
    setScreenHeight(document.body.offsetHeight / 3.9);
  }, []);
  // set style on song page
  if (isSongRouter && screenWidth && screenHeight) {
    homeBgStyle = {
      backgroundImage: `url(${curSongInfo.picUrl}?param=${screenWidth}y${screenHeight})`
    };
    invalidStyle = {
      background: 'none',
      border: 'none',
      color: 'white'
    };
  }
  return (
    <currentTimeContext.Provider value={currentTimeBus}>
      <div className="mask home-bg" style={homeBgStyle}></div>
      <div className="mask home-fg"></div>
      <div className="home">
        <AppHeader customStyle={invalidStyle}/>
        <main className="app-main" style={invalidStyle}>
          <LeftSide deleteTrack={deleteTrack} playTracks={playTracks} customStyle={invalidStyle} curSongInfo={curSongInfo} playMusic={playMusic} loadSource={loadSource} setSource={setSource} setStatus={setStatus} fetchSongUrl={fetchSongUrl}></LeftSide>
            <article className="container" style={invalidStyle}>
              <Suspense fallback={<React.Fragment></React.Fragment>}>
                <Switch>
                  <Redirect from="/" exact to="/recommend" />
                  <Route path="/recommend" component={Recommend} exact></Route>
                  <Route path={`/recommend/detail`} component={Detail}></Route>
                  <Route path={`/rank/detail`} component={Detail}></Route>
                  <Route path="/rank" component={Rank} exact></Route>
                  <Route path="/song" component={Song} exact></Route>
                </Switch>
              </Suspense>
            </article>
        </main>
        <AppFooter customStyle={invalidStyle} status={curSongInfo.status} stopMusic={stopMusic} playMusic={playMusic} playTracks={playTracks} curSongInfo={curSongInfo} setSource={setSource} setStatus={setStatus} fetchSongUrl={fetchSongUrl} fetchLyric={fetchLyric}></AppFooter>
      </div>
    </currentTimeContext.Provider>
  )
};
