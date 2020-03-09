import React, {useEffect} from 'react';
import {rankListType} from '../../types/index';
import BoxList from '../../component/box-list'
import './style.pcss';

interface Props {
  fetchRankList: Function,
  rankList: rankListType
}

export default function Recommend({fetchRankList, rankList}: Props) {
  // fetch rank list
  useEffect(() => {
    fetchRankList();
  }, []);
  let rankDom;
  if (rankList && rankList.list) {
    rankDom = (
      <BoxList rankList={rankList.list} type="rank"/>
    )
  }
  return (
    <div className="rank">
      {rankDom}
    </div>
  )
};
