import * as React from 'react';
import AppHeader from '../../component/header';
import AppFooter from '../../component/footer';
import {Route, Switch} from 'react-router-dom';
import Recommend from '../../container/recommend/index';
import Rank from '../../page/rank';
import LeftSide from '../../component/left-side';
import PlaylistDetail from '../../container/playlist-detail'
import './style.pcss';
import {curSongInfo, songTrack} from '../../types/index';
import { setSource } from '../../store/actions';
interface Props {
  playTracks: Array<songTrack>,
  curSongInfo: curSongInfo,
  playMusic: Function,
  stopMusic: Function,
  loadSource: Function,
  setSource: Function,
  setStatus: Function
}
export default function Home({setStatus, curSongInfo, stopMusic, playMusic, playTracks, loadSource, setSource}: Props) {
  return (
    <div className="home">
      <AppHeader></AppHeader>
      <main className="app-main">
        <LeftSide curSongInfo={curSongInfo}></LeftSide>
          <article className="container">
            <Switch>
              <Route path="/recommend" component={Recommend}></Route>
              <Route path="/rank" component={Rank}></Route>
              <Route path="/playlist-detail" component={PlaylistDetail}></Route>
            </Switch>
          </article>
      </main>
      <AppFooter status={curSongInfo.status} stopMusic={stopMusic} playMusic={playMusic} playTracks={playTracks} curSongInfo={curSongInfo} loadSource={loadSource} setSource={setSource} setStatus={setStatus}></AppFooter>
    </div>
  )
};
