import React from 'react'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer';


class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <>
            <Navbar/>
            <Footer/>
          </>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
