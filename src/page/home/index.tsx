import * as React from 'react';
import AppHeader from '../../component/common/app-header';
import LayoutMain from '../../layout/main';
import {recommendListType} from '../../types';


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
        <LayoutMain>
          <ul>
            <li></li>
          </ul>
        </LayoutMain>
      </div>
    )
  }
};
