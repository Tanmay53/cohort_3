import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <div className='container'>
      <BrowserRouter>
          <Navbar/> 
          <Routes />
      </BrowserRouter>
    </div>
  )
}
