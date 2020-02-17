import React, { useEffect, useState} from 'react';
import {recommendTagsType, recommendTagDetailType, TagsType} from '../../types';
import BoxList from '../recommend/components/box-list'
import './style.pcss';

interface Props {
  recommendTags: recommendTagsType,
  recommendTagDetail: recommendTagDetailType,
  fetchRemmendTags: Function,
  fetchRecommendDetail: Function
}

export default function Recommend({recommendTags, recommendTagDetail, fetchRemmendTags, fetchRecommendDetail}: Props) {
  useEffect(() => {
    if (recommendTags.code === void 0) {
      fetchRemmendTags()
    }
    if (Object.keys(recommendTags).length > 0) {
      fetchRecommendDetail(recommendTags.tags[0].name)
    }
  }, [recommendTags.code]);
  let [activeTag, setActiveTag] = useState('华语');
  let recommendBox;
  function selectTag (selectedTag: TagsType, e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setActiveTag(selectedTag.name);
    fetchRecommendDetail(selectedTag.name);
  }
  if (recommendTags && recommendTags.tags) {
    recommendBox = recommendTags.tags.map((item) =>{
      let tabClass = ['tag'];
      if (activeTag === item.name) {
        tabClass.push('active');
      }
      return (
        <li className={tabClass.join(' ')} key={item.id} onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => selectTag(item, e)}>{item.name}</li>
      )
    })
  }
  let BoxListDom;
  if (recommendTagDetail.playlists) {
    BoxListDom = (
      <BoxList recommendTagDetail={recommendTagDetail}/>
    )
  }
  return (
    <div className="recommend">
      <ul className="tags-list">
        {recommendBox}
      </ul>
      <section>
        {BoxListDom}
      </section>
    </div>
  )
}
