import * as React from 'react';
import './style.pcss';
import SvgIcon from '../svg-icon';

class AppHeader extends React.Component {
  render () {
    return (
      <footer className="app-footer">
        <div className="footer-bg"></div>
        <div className="footer-container">
          <SvgIcon href="iconxiayige"></SvgIcon>
        </div>
      </footer>
    )
  }
}

export default AppHeader;