import * as React from 'react';
import {recommendTagDetailType} from '../../../../types';
import './style.pcss';
import { url } from 'inspector';

interface Props {
  recommendTagDetail: recommendTagDetailType
}

export default function BoxList({recommendTagDetail}: Props) {
  let boxList = recommendTagDetail.playlists.map((item) => {
    const imgStyle = {
      backgroundImage: `url(${item.coverImgUrl})`
    };
    return (
      <li className="box-item" key={item.id} style={imgStyle}></li>
    )
  })
  return (
    <ul className="recommend-box">
      {boxList}
    </ul>
  )
}