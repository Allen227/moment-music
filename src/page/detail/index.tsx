import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {playlistDetailType, songUrlType} from '../../types/index';
import './style.pcss';
import { Scrollbars } from 'react-custom-scrollbars';
import parseTime from '../../plugin/parseTime';
import ContentLoader from "react-content-loader" 

interface Props {
  playlistDetail: playlistDetailType,
  songUrl: songUrlType,
  playMusic: Function,
  loadSource: Function,
  setSource: Function,
  setLoop: Function,
  pushPlayTracks: Function,
  fetchPlaylistDetail: Function,
  fetchSongUrl: Function,
  setPlayIndex: Function,
  setStatus: Function
}

interface locationType {
  state: any
}

export default function Detail ({fetchPlaylistDetail, playlistDetail, fetchSongUrl, playMusic, loadSource, setSource, setLoop, pushPlayTracks, setStatus}: Props) {
  let location: locationType = useLocation();
  let playlistId: number = location.state.id;
  let contentDom;
  /* eslint-disable */
  useEffect(() => {
    fetchPlaylistDetail(playlistId);
  }, []);

  let topInfo;
  let songslist;

  async function playSong (track: any) {
    const songUrl = await fetchSongUrl(track.id);
    if (!!songUrl) {
      const songInfo = {
        id: track.id,
        name: track.name,
        picUrl: track.al.picUrl,
        source: songUrl,
        player: track.ar[0].name,
        dt: track.dt
      };
      setSource(songInfo);
      loadSource();
      playMusic();
      pushPlayTracks(songInfo);
      setStatus(true);
    }
  }
  contentDom = (
    <ContentLoader 
      speed={0}
      width={935}
      height={475}
      viewBox="0 0 935 475"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="150" height="150" /> 
      <rect x="175" y="30" rx="0" ry="0" width="500" height="20" /> 
      <rect x="175" y="70" rx="0" ry="0" width="600" height="20" /> 
      <rect x="175" y="110" rx="0" ry="0" width="700" height="20" /> 
      <rect x="0" y="197" rx="0" ry="0" width="900" height="300" /> 
      <rect x="662" y="417" rx="0" ry="0" width="60" height="0" />
    </ContentLoader>
  )
  if (playlistDetail.playlist) {
    let playList = playlistDetail.playlist;
    songslist = playList.tracks.map((track, idx) => {
      return (
        <div className="table-row" key={track.id} onClick={() => playSong(track)}>
          <span className="table-cell track-index">{idx + 1}</span>
          <span className="table-cell song-name">{track.name}</span>
          <span className="table-cell song-player">{track.ar[0].name}</span>
          <span className="table-cell song-time">{parseTime(track.dt)}</span>
        </div>
      )
    })
    topInfo = (
      <div className="playlist-top">
        <img className="playlist-cover" src={`${playList.coverImgUrl}?param=200y200`} alt="playlist cover"></img>
        <div className="playlist-info">
          <h2 className="playlist-title">{playList.name}</h2>
          <p className="playlist-desc">{playList.description}</p>
        </div>
      </div>
    );
    contentDom = (
      <Scrollbars style={{ width: '100%', height: '100%' }} autoHide>
        {topInfo}
        <div className="table-wrapper">
          <div className="table-title">
            <div className="title-item"></div>
            <div className="title-item">歌曲</div>
            <div className="title-item">歌手</div>
            <div className="title-item">时长</div>
          </div>
          <div className="table-content">
            {songslist}
          </div>
        </div>
      </Scrollbars>
    )
  }
  return (
    <div className="playlist-detail">
      {contentDom}
    </div>
  )
}
