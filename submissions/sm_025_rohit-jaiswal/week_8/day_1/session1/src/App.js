import React from 'react';
import Mobile from './components/MobileOS/Mobile'
import Buttons from './components/Buttons/Buttons'
import Cards from './components/Card/Cards'
import './App.css';

function App() {
  return (
    <div>
    <div class="container text-center">
      <Mobile/>
      <Buttons/>
      </div>
      <div>
      <Cards/>
    </div>
    </div>
  );
}

export default App;
