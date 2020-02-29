import React, { useEffect, useState} from 'react';
import {recommendTagsType, recommendTagDetailType, TagsType} from '../../types';
import BoxList from '../recommend/components/box-list';
import './style.pcss';

interface Props {
  recommendTags: recommendTagsType,
  recommendTagDetail: recommendTagDetailType,
  fetchRemmendTags: () => recommendTagsType,
  fetchRecommendDetail: (tag: string) => recommendTagsType
}

export default function Recommend({recommendTags, recommendTagDetail, fetchRemmendTags, fetchRecommendDetail}: Props) {
  let [activeTag, setActiveTag] = useState('华语');
  let recommendBox;
  /* eslint-disable */
  useEffect(() => {
    if (recommendTags.code === void 0) {
      fetchRemmendTags()
    }
    if (Object.keys(recommendTags).length > 0) {
      fetchRecommendDetail(recommendTags.tags[0].name)
    }
  }, [recommendTags.code]);

  function selectTag (selectedTag: TagsType) {
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
        <li className={tabClass.join(' ')} key={item.id} onClick={() => selectTag(item)}>{item.name}</li>
      )
    })
  }
  let BoxListDom;
  if (Object.keys(recommendTagDetail).length > 0) {
    BoxListDom = (
      <BoxList recommendTagDetail={recommendTagDetail}/>
    )
  }
  return (
    <div className="recommend">
        <ul className="tags-list">
          {recommendBox}
        </ul>
      {BoxListDom}
    </div>
  )
}
