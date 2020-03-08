import * as React from 'react';
import {NavLink} from 'react-router-dom';
import './style.pcss';

class AppHeader extends React.Component {
  render () {
    return (
      <header className="app-header">
        <div className="header-bg"></div>
        <div className="header-container">
          <NavLink to="recommend">
            <h1 className="app-title">MOMENT</h1>
          </NavLink>
          <ul className="menu-list">
            <NavLink to="recommend" className="menu-item" activeClassName="active">
              <li>推荐</li>
            </NavLink>
            <NavLink to="rank" className="menu-item" activeClassName="active">
              <li>排行榜</li>
            </NavLink>
          </ul>
        </div>
      </header>
    )
  }
}

export default AppHeader;