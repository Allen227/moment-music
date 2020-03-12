import React, {useState} from 'react';
import AppHeader from '../../component/header';
import AppFooter from '../../component/footer';
import {Route, Switch, Redirect} from 'react-router-dom';
import Recommend from '../../container/recommend/index';
import Rank from '../../container/rank/index';
import Song from '../../container/song/index';
import LeftSide from '../../component/left-side';
import './style.pcss';
import {curSongInfo, songTrack} from '../../types/index';
import Detail from '../../container/detail';
import {currentTime, currentTimeContext} from '../../plugin/currentTimeContext';
interface Props {
  playTracks: Array<songTrack>,
  curSongInfo: curSongInfo,
  playMusic: Function,
  stopMusic: Function,
  loadSource: Function,
  setSource: Function,
  setStatus: Function,
  fetchSongUrl: Function,
  fetchLyric: Function
}
export default function Home({setStatus, curSongInfo, stopMusic, playMusic, playTracks, loadSource, setSource, fetchSongUrl, fetchLyric}: Props) {
  const [time, setTime] = useState(currentTime);
  function updateCurrentTime (time: any) {
    setTime(time);
  }
  const currentTimeBus: any = {
    value: time,
    update: updateCurrentTime
  }
  return (
    <currentTimeContext.Provider value={currentTimeBus}>
      <div className="home">
        <AppHeader></AppHeader>
        <main className="app-main">
          <LeftSide curSongInfo={curSongInfo} playMusic={playMusic} loadSource={loadSource} setSource={setSource} setStatus={setStatus} fetchSongUrl={fetchSongUrl}></LeftSide>
            <article className="container">
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
        <AppFooter status={curSongInfo.status} stopMusic={stopMusic} playMusic={playMusic} playTracks={playTracks} curSongInfo={curSongInfo} setSource={setSource} setStatus={setStatus} fetchSongUrl={fetchSongUrl} fetchLyric={fetchLyric}></AppFooter>
      </div>
    </currentTimeContext.Provider>
  )
};
