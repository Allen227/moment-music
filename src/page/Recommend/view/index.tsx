import * as React from 'react';
import AppHeader from '../../../component/common/app-header';
import LayoutMain from '../../../layout/layout-main';
export interface Props {
  enthusiasmLevel: number,
  recommendList: {},
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
      </div>
    )
  }
};
