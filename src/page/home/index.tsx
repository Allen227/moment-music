import * as React from 'react';
import AppHeader from '../../component/common/app-header';
import {recommendListType} from '../../types';
import './style.pcss';


interface Props {
  recommendList: recommendListType,
  fetchRemmendList: Function
}

export default class Recommend extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchRemmendList()
   }
  render () {
    return (
      <div className="recommend">
        <AppHeader></AppHeader>
      </div>
    )
  }
};
