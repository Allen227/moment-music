import React from 'react';
import './index.css';
import AppHeader from '../components/app-header';

const App: React.FC = () => {
  return (
    <div className="app">
      <AppHeader>
        <h1 className="app-title">SEA MUSIC</h1>
        <ul className="menu-list">
          <li>推荐</li>
          <li>排行榜</li>
        </ul>
      </AppHeader>
    </div>
  );
}

export default App;
