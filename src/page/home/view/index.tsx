import React from 'react';
import './index.css';
import AppHeader from '../components/app-header';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader>
        <h1>SEA MUSIC</h1>
        <ul className="menu-list">
          <li>推荐</li>
        </ul>
      </AppHeader>
    </div>
  );
}

export default App;
