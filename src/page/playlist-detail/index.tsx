import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {playlistDetailType} from '../../types/playlist';
import './style.pcss';

interface Props {
  fetchPlaylistDetail: Function,
  playlistDetail: playlistDetailType
}

export default function PlaylistDetail ({fetchPlaylistDetail, playlistDetail}: Props) {
  let location = useLocation();
  let playlistId = location.state.id;

  /* eslint-disable */
  useEffect(() => {
    fetchPlaylistDetail(playlistId);
  }, []);

  let topInfo;
  let songslist;
  if (playlistDetail.playlist) {
    let playList = playlistDetail.playlist;
    songslist = playList.tracks.map((track, idx) => (
      <div className="table-row" key={track.id}>
        <span className="table-cell track-index">{idx}</span>
        <span className="table-cell song-name">{track.name}</span>
        <span className="table-cell song-player">{track.ar[0].name}</span>
        <span className="table-cell song-time">{`${Math.floor(track.dt / 1000 / 60)}分${track.dt % 60}秒`}</span>
      </div>
    ))
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
    </div>
  )
}
