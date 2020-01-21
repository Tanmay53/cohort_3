import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {Route} from 'react-router-dom'
import About from './components/About'
import Cloth from './components/Cloth'
import Electronic from './components/ELectronics'
import Contact from './components/Contact'
import Help from './components/Help'
import Login from './components/Login'
import Home from './components/Home'



export default class App extends Component {
  render() {
    return (
      <React.Fragment>

       <Navbar/>
      <Route path='/home' component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="/cloth" component={Cloth}/>
        <Route path="/elec" component={Electronic}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/help" component={Help}/>


      </React.Fragment>
      
      
      
    )
  }
}
