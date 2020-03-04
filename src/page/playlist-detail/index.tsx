import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {playlistDetailType, songUrlType, songTrack} from '../../types/index';
import './style.pcss';
import { Scrollbars } from 'react-custom-scrollbars';
import parseTime from '../../plugin//parseTime';
interface Props {
  fetchPlaylistDetail: Function,
  fetchSongUrl: Function,
  playlistDetail: playlistDetailType,
  songUrl: songUrlType,
  playMusic: Function,
  loadSource: Function,
  setSource: Function,
  setLoop: Function
}

interface locationType {
  state: any
}

export default function PlaylistDetail ({fetchPlaylistDetail, playlistDetail, fetchSongUrl, playMusic, loadSource, setSource, setLoop}: Props) {
  let location: locationType = useLocation();
  let playlistId: number = location.state.id;
  /* eslint-disable */
  useEffect(() => {
    fetchPlaylistDetail(playlistId);
  }, []);

  let topInfo;
  let songslist;

  async function playSong (track: any, index: number) {
    const songUrlData = await fetchSongUrl(track.id);
    const songInfo = {
      id: track.id,
      name: track.name,
      picUrl: track.al.picUrl,
      source: songUrlData.data[0].url,
      dt: track.dt
    }
    setLoop();
    setSource(songInfo, index);
    loadSource();
    playMusic();
  }

  if (playlistDetail.playlist) {
    let playList = playlistDetail.playlist;
    songslist = playList.tracks.map((track, idx) => {
      return (
        <div className="table-row" key={track.id} onClick={() => playSong(track, idx)}>
          <span className="table-cell track-index">{idx + 1}</span>
          <span className="table-cell song-name">{track.name}</span>
          <span className="table-cell song-player">{track.ar[0].name}</span>
          <span className="table-cell song-time">{parseTime(track.dt)}</span>
        </div>
      )
    })
    topInfo = (
      <div className="playlist-top">
        <img className="playlist-cover" src={playList.coverImgUrl} alt="playlist cover"></img>
        <div className="playlist-info">
          <h2 className="playlist-title">{playList.name}</h2>
          <p className="playlist-desc">{playList.description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="playlist-detail">
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
    </div>
  )
}
