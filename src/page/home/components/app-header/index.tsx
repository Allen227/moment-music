import * as React from 'react';
import './index.css';

class AppHeader extends React.Component<any> {
  render () {
    return (
      <header className="app-header">{this.props.children}</header>
    );
  }
}

export default AppHeader;
