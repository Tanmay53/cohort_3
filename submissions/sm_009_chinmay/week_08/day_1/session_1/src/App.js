import React from 'react';
import JoinUs from './components/buttons/JoinUs';
import Settings from './components/buttons/Settings';
import Mobiles from './components/Mobiles';
import Card from './components/Card';
import ContactUs from './components/buttons/ContactUs';
import Download from './components/buttons/Download';
import Help from './components/buttons/Help';
import Home from './components/buttons/Home';
import Login from './components/buttons/Login';
import Search from './components/buttons/Search'
import './App.css';
import './styles/Cards.css'

function App() {
  return (
    <div>
      <Mobiles />
      <div style={{display: 'grid', gridTemplateColumns: '150px 150px'}} className='m-4 p-2'>
        <JoinUs />
        <Settings />
        <Login />
        <ContactUs />
        <Search />
        <Help />
        <Home />
        <Download />
      </div>
      <Card />
    </div>
  );
}

export default App;