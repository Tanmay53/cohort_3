import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Service from './Service'
import Login from './Login'

class Routee extends Component {
    render() {
        return (
            <div>
                 <Route path='/home' component = {Home} />
        <Route path='/about' component = {About} />
        <Route path='/contact' component = {Contact} />
        <Route path='/service' component={Service}/>
        <Route path='/login' component={Login}/>
      
            </div>
        );
    }
}

export default Routee;