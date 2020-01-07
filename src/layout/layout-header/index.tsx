import * as React from 'react';
import './style.pcss';

class AppHeader extends React.Component {
  render () {
    return (
      <header className="app-header">
        <div className="app-header__bg"></div>
        <div className="app-header__content">{this.props.children}</div>
      </header>
    );
  }
}

export default AppHeader;
