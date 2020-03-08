import * as React from 'react';
import AppHeader from '../../component/header';
import AppFooter from '../../component/footer';
import {Route, Switch, Redirect} from 'react-router-dom';
import Recommend from '../../container/recommend/index';
import Rank from '../../page/rank';
import LeftSide from '../../component/left-side';
import './style.pcss';
import {curSongInfo, songTrack} from '../../types/index';
import PlaylistDetail from '../../container/playlist-detail';
interface Props {
  playTracks: Array<songTrack>,
  curSongInfo: curSongInfo,
  playMusic: Function,
  stopMusic: Function,
  loadSource: Function,
  setSource: Function,
  setStatus: Function,
  fetchSongUrl: Function
}
export default function Home({setStatus, curSongInfo, stopMusic, playMusic, playTracks, loadSource, setSource, fetchSongUrl}: Props) {
  return (
    <div className="home">
      <AppHeader></AppHeader>
      <main className="app-main">
        <LeftSide curSongInfo={curSongInfo}></LeftSide>
          <article className="container">
            <Switch>
              <Redirect from="/" exact to="/recommend" />
              <Route path="/recommend" component={Recommend} exact></Route>
              <Route path={`/recommend/playlist-detail`} component={PlaylistDetail}></Route>
              <Route path="/rank" component={Rank} exact></Route>
            </Switch>
          </article>
      </main>
      <AppFooter status={curSongInfo.status} stopMusic={stopMusic} playMusic={playMusic} playTracks={playTracks} curSongInfo={curSongInfo} loadSource={loadSource} setSource={setSource} setStatus={setStatus} fetchSongUrl={fetchSongUrl}></AppFooter>
    </div>
  )
};
