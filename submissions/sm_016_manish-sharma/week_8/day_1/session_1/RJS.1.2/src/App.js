import React from 'react';
import './App.css';
import Join from './components/Join'
import Settings from './components/Settings';
import Login from './components/Login';
import Contact from './components/Contact';
import Search from './components/Search';
import Help from './components/Help';
import Home from './components/Home';
import Download from './components/Download';

function App() {
  return (
    <div className='container m-5 text-white'>
      <div className='row m-2'>
        <div className='col-2'><Join /></div>
        <div className='col-2'><Settings /></div>
      </div>
      <div className='row m-2'>
        <div className='col-2'><Login /></div>
        <div className='col-2'><Contact /></div>
      </div>
      <div className='row m-2'>
        <div className='col-2'><Search /></div>
        <div className='col-2'><Help /></div>
      </div>
      <div className='row m-2'>
        <div className='col-2'><Home /></div>
        <div className='col-2'><Download /></div>
      </div>
    </div>
  );
}

export default App;
