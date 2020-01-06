import * as React from 'react';
import LayoutHeader from '../../../layout/layout-header';
import {NavLink} from 'react-router-dom';

class AppHeader extends React.Component {
  render () {
    return (
      <LayoutHeader>
        <h1 className="app-title">MOMENT</h1>
        <ul className="menu-list">
          <NavLink to="/recommend" className="menu-item" activeClassName="active">
            <li>推荐</li>
          </NavLink>
          <NavLink to="/rank" className="menu-item" activeClassName="active">
            <li>排行榜</li>
          </NavLink>
        </ul>
      </LayoutHeader>
    )
  }
}

export default AppHeader;