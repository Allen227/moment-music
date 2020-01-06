import * as React from 'react';
import AppHeader from '../../component/common/app-header';
import LayoutMain from '../../layout/layout-main';
import {recommendListType} from '../../types';
import { Carousel } from 'antd';
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
    let recommendList;
    if (this.props.recommendList.banner) {
      recommendList = (
        <Carousel autoplay>
          {this.props.recommendList.banner.map((item: any, idx: number) => 
            <div className="banner-img" key={idx} style={{backgroundImage: `url(${item.imgurl})`}}>
              <img src={item.imgurl} width="100%" height="100%"/>
            </div>
          )}
        </Carousel>
      )
    }
    return (
      <div className="recommend">
        <AppHeader></AppHeader>
        <LayoutMain>
          {recommendList}
        </LayoutMain>
      </div>
    )
  }
};
