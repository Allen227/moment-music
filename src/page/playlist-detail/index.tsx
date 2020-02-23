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

  useEffect(() => {
    fetchPlaylistDetail(playlistId);
  }, []);
  let topInfo;
  if (playlistDetail.playlist) {
    topInfo = (
      <img className="playlist-cover" src={playlistDetail.playlist.coverImgUrl} alt="playlist cover"></img>
    );
  }
  return (
    <div className="playlist-detail">
      {topInfo}
    </div>
  )
}
