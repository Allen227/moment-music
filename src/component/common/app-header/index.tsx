import * as React from 'react';
import LayoutHeader from '../../../layout/layout-header';
import {BrowserRouter, NavLink} from 'react-router-dom';

class AppHeader extends React.Component {
  render () {
    return (
      <LayoutHeader>
        <BrowserRouter>
          <h1 className="app-title">SEA MUSIC</h1>
          <ul className="menu-list">
            <NavLink to="/recommend" className="menu-list__item" activeClassName="menu-list__item--active">
              <li>推荐</li>
            </NavLink>
            <NavLink to="/rank" className="menu-list__item" activeClassName="menu-list__item--active">
              <li>排行榜</li>
            </NavLink>
          </ul>
        </BrowserRouter>
      </LayoutHeader>
    )
  }
}

export default AppHeader;