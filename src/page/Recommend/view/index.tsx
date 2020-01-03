import * as React from 'react';
import AppHeader from '../../../component/common/app-header';
import LayoutMain from '../../../layout/layout-main';
export interface Props {
  fetchRemmendList: Function
}

export default class Recommend extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  async componentDidMount() {
   this.props.fetchRemmendList()
  }
  render () {
    return (
      <div className="recommend">
        <AppHeader></AppHeader>
        <LayoutMain></LayoutMain>
      </div>
    )
  }
};
