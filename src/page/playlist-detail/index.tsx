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

  if (playlistDetail.playlist) {
    let playList = playlistDetail.playlist;
    topInfo = (
      <div className="playlist-top">
        <img className="playlist-cover" src={playList.coverImgUrl} alt="playlist cover"></img>
        <div className="playlist-info">
          <h2 className="playlist-title">{playList.name}</h2>
          <p className="playlist-desc">{playList.description}</p>
        </div>
        <div className="list-wrapper">
          <ul className="detail-list">
            <li className="song-item"></li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="playlist-detail">
      {topInfo}
    </div>
  )
}
