import * as React from 'react';
import LayoutHeader from '../../../layout/header';
import {NavLink} from 'react-router-dom';
import './style.pcss';

class AppHeader extends React.Component {
  render () {
    return (
      <LayoutHeader>
        <NavLink to="/">
          <h1 className="app-title">MOMENT</h1>
        </NavLink>
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