import React from 'react';
import './App.css';
import Navbar from './container'
import Header from './header'
import CardContainer from './cardcontainer'
import QuickSearch from './quick'
import Localities from './localities'
import Mobile from './mobile'
import GridData from './grid'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <CardContainer/>
      <QuickSearch/>
      <Localities/>
      <Mobile/>
      <GridData/>
    </div>
  );
}

export default App;
