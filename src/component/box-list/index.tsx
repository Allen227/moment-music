import React from 'react';
import {detailType, rankItemType} from '../../types';
import { useHistory } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import ContentLoader from 'react-content-loader'
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
  const boxListLoader = (
    <li style={{width: '100%', height: '100%'}}>
      <ContentLoader 
        speed={0}
        width={980}
        height={650}
        viewBox="0 0 980 650"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="20" y="20" rx="0" ry="0" width="150" height="150" /> 
        <rect x="20" y="180" rx="12" ry="12" width="150" height="20" /> 
        <rect x="210" y="20" rx="0" ry="0" width="150" height="150" /> 
        <rect x="400" y="20" rx="0" ry="0" width="150" height="150" /> 
        <rect x="590" y="20" rx="0" ry="0" width="150" height="150" /> 
        <rect x="780" y="20" rx="0" ry="0" width="150" height="150" /> 
        <rect x="211" y="180" rx="12" ry="12" width="150" height="20" /> 
        <rect x="400" y="180" rx="12" ry="12" width="150" height="20" /> 
        <rect x="590" y="180" rx="12" ry="12" width="150" height="20" /> 
        <rect x="780" y="180" rx="12" ry="12" width="150" height="20" /> 
        <rect x="18" y="220" rx="0" ry="0" width="150" height="150" /> 
        <rect x="18" y="380" rx="12" ry="12" width="150" height="20" /> 
        <rect x="208" y="220" rx="0" ry="0" width="150" height="150" /> 
        <rect x="398" y="220" rx="0" ry="0" width="150" height="150" /> 
        <rect x="588" y="220" rx="0" ry="0" width="150" height="150" /> 
        <rect x="778" y="220" rx="0" ry="0" width="150" height="150" /> 
        <rect x="209" y="380" rx="12" ry="12" width="150" height="20" /> 
        <rect x="398" y="380" rx="12" ry="12" width="150" height="20" /> 
        <rect x="588" y="380" rx="12" ry="12" width="150" height="20" /> 
        <rect x="778" y="380" rx="12" ry="12" width="150" height="20" /> 
        <rect x="17" y="420" rx="0" ry="0" width="150" height="150" /> 
        <rect x="17" y="580" rx="12" ry="12" width="150" height="20" /> 
        <rect x="207" y="420" rx="0" ry="0" width="150" height="150" /> 
        <rect x="397" y="420" rx="0" ry="0" width="150" height="150" /> 
        <rect x="587" y="420" rx="0" ry="0" width="150" height="150" /> 
        <rect x="777" y="420" rx="0" ry="0" width="150" height="150" /> 
        <rect x="208" y="580" rx="12" ry="12" width="150" height="20" /> 
        <rect x="397" y="580" rx="12" ry="12" width="150" height="20" /> 
        <rect x="587" y="580" rx="12" ry="12" width="150" height="20" /> 
        <rect x="777" y="580" rx="12" ry="12" width="150" height="20" />
      </ContentLoader>
    </li>
  )
  let contentDom: any = boxListLoader;
  if (boxListArr.length > 0) {
    contentDom = boxListArr.map((item) => {
      return (
        <li className="box-item" key={item.id} onClick={() => jumpDetail(item.id)}>
          <div className="img-box">
            <img className="img" src={`${item.coverImgUrl}?param=200y200`} alt="box-cover"/>
          </div>
          <div className="box-title">{item.name}</div>
        </li>
      )
    });
  }
  return (
    <Scrollbars style={{width: '100%', height: '100%'}} autoHide>
      <ul className="box-list">
        {contentDom}
      </ul>
    </Scrollbars>
  )
}