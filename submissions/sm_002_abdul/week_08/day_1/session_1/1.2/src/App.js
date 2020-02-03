import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import JoinUs from './components/JoinUs'
import Login from './components/Login'
import Search from './components/Search'
import Home from './components/Home'
import Settings from './components/Settings'
import ContactUs from './components/ContactUs'
import Help from './components/Help'
import Download from './components/Download'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-2'>
          <JoinUs/>
          <Login/>
          <Search/>
          <Home/>
        </div>
        <div className='col-2'>
          <Settings/>
          <ContactUs/>
          <Help/>
          <Download/>
        </div>
      </div>
    </div>
  );
}

export default App;

ReactDOM.render(<App/>,document.getElementById('root'))
