import * as React from 'react';
import {recommendTagsType} from '../../types';


interface Props {
  recommendList: recommendTagsType,
  fetchRemmendList: Function
}

export default class Recommend extends React.Component<Props> {
  render () {
    return (
      <div className="recommend">
        <h1>Rank</h1>
      </div>
    )
  }
};
