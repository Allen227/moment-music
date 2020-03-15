import React from 'react';
import {detailType, rankItemType} from '../../types';
import { useHistory } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import './style.pcss';

interface Props {
  recommendList?: Array<detailType>,
  rankList?: Array<rankItemType>,
  type: string
}

export default function BoxList({recommendList, rankList, type}: Props) {
  let history = useHistory();
  // set router according to type
  function jumpDetail (id: number) {
    let jumpObj;
    jumpObj = {
      pathname: `${type}/detail`,
      state: {
        id
      }
    }
    history.push(jumpObj)
  }
  // set render data according to type
  let boxListArr: Array<any> = [];
  if (recommendList && type === 'recommend') {
    boxListArr = recommendList;
  } else if (rankList && type === 'rank') {
    boxListArr = rankList;
  }

  let boxList = boxListArr.map((item) => {
    return (
      <li className="box-item" key={item.id} onClick={() => jumpDetail(item.id)}>
        <div className="img-box">
          <img className="img" src={`${item.coverImgUrl}?param=200y200`} alt="box-cover"/>
        </div>
        <div className="box-title">{item.name}</div>
      </li>
    )
  })
  return (
    <Scrollbars style={{width: '100%', height: '100%'}} autoHide>
      <ul className="box-list">
        {boxList}
      </ul>
    </Scrollbars>
  )
}