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
  songslist = playList.tracks.map((track, idx) => <li className="list-item song"><span className="track-index">{idx}</span>{track.name}</li>)
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
      <div className="list-wrapper">
        <ul className="detail-list">
          {songslist}
        </ul>
      </div>
    </div>
  )
}
