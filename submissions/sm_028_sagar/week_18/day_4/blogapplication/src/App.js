import React from 'react'
import {BrowserRouter} from "react-router-dom"
import Routes from './Routes/Routes'
import Navbar from './Components/Navbar'


export default function App(props) {
  return (
    <BrowserRouter>
      <Navbar {...props}/>
      <Routes />
    </BrowserRouter>
  )
}
