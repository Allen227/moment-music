import React from 'react';
import {recommendTagDetailType} from '../../../../types';
import { useHistory } from "react-router-dom";
import './style.pcss';

interface Props {
  recommendTagDetail: recommendTagDetailType
}

export default function BoxList({recommendTagDetail}: Props) {
  let history = useHistory();

  function jumpDetail (playlistId: number) {
    history.push({
      pathname: `/playlist-detail`,
      state: {
        id: playlistId
      }
    })
  }

  let boxList = recommendTagDetail.playlists.map((item) => {
    return (
      <li className="box-item" key={item.id} onClick={() => jumpDetail(item.id)}>
        <div className="img-box">
          <img className="img" src={item.coverImgUrl} alt="playlist-cover"/>
        </div>
        <div className="box-title">{item.name}</div>
      </li>
    )
  })
  return (
    <ul className="recommend-box">
      {boxList}
    </ul>
  )
}