import React from 'react';
import './App.css';
import Mobilelist from './components/Mobilelist';
import Cardprofile from './components/Cardprofile';
import Links from './components/Links';
function App() {
  return (
    <div className='App'>
      <div className='d-flex'>
        <div>
          <h1>FSD RJS 1.1</h1>
          <Mobilelist />
          <h1>FSD RJS 1.2</h1>
          <Links />
        </div>
        <div>
          <h1>FSD RJS 1.3</h1>
          <Cardprofile />
        </div>
      </div>
    </div>
  );
}

export default App;
