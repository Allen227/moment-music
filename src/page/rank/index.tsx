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
  /* eslint-disable */
  useEffect(() => {
    fetchRankList();
  }, []);
  // set node of rank list
  let rankDom = (
      <BoxList rankList={rankList.list} type="rank"/>
    )
  return (
    <div className="rank">
      {rankDom}
    </div>
  )
};
