import * as React from 'react';
import './style.pcss';

class AppMain extends React.Component {
  render () {
    return (
      <main className="app-main">
        <div className="app-main__container">{this.props.children}</div>
      </main>
    )
  }
}

export default AppMain;
