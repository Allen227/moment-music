import * as React from 'react';
import AppHeader from '../../../component/common/app-header';
import LayoutMain from '../../../layout/layout-main';
import RecommendList from '../../../container/recommend/index'

export interface Props {
  dispatch: any
}

export default class Recommend extends React.Component {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
  }
  render () {
    return (
      <div className="recommend">
        <RecommendList/>
        <AppHeader></AppHeader>
        <LayoutMain></LayoutMain>
      </div>
    )
  }
};
