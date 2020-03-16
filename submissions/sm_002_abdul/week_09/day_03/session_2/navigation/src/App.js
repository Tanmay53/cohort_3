import React from 'react';
import Navbar from './Components/Navbar'
import './App.css';
import Sitename from './Components/Sitename'
import NavbarItem from './Components/NavbarItem'

function App() {
  return (
    <Navbar>
      <Sitename>
        <NavbarItem label="SITENAME"/>
      </Sitename>
      <NavbarItem label="About Us"/>
      <NavbarItem label="Prices"/>
      <NavbarItem label="Start Page"/>
      <NavbarItem label="Offer"/>
      <NavbarItem label="Contact"/>
    </Navbar>
  )
}

export default App
