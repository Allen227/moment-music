import * as React from 'react';
import './style.pcss';

class LeftSide extends React.Component {
  render () {
    return (
      <aside className="left-side">
        <ul className="play-list">
          <li className="list-item"></li>
        </ul>
      </aside>
    )
  }
}

export default LeftSide;