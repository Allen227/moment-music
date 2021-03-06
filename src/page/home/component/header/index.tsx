import * as React from 'react';
import {NavLink} from 'react-router-dom';
import './style.pcss';

interface Props {
  customStyle: object
}

function AppHeader ({customStyle}: Props) {
  return (
    <header className="app-header" style={customStyle}>
      <div className="header-bg"></div>
      <div className="header-container" style={customStyle}>
        <NavLink to="recommend">
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
      </div>
    </header>
  )
}

export default AppHeader;