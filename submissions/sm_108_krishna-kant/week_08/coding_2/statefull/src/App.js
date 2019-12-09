import React from 'react';
import './App.css';
import Mobile from './components/Mobile';
import Links from './components/Links';
import Profile from './components/Profile';
function App() {
  return (
    <div className='App'>
      <div className='fsd-rjs-1.1'>
        <div className='d-flex'>
          <div>
            <Mobile />
            <Links />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
