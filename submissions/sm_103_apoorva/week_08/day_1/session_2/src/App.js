import React from 'react';
// import logo from './logo.svg';
import Mobile from './components/day_1/Mobile'
import Card from './components/day_1/btnCard'
import Btn from './components/day_1/userBtn'
import Img from './components/day_1/Img'
import UserArr from './components/day_1/UserArr'
import './App.css';
// import ReactDOM from 'react-dom';
function App() {
  return (
    <div>
        <Mobile />
        <Card />
        <br />
        <div className="bgBox">
          <div className="card">
            <Btn />
            <Img />
            <UserArr />
          </div>
        </div>
    </div>
  );
}

export default App;
