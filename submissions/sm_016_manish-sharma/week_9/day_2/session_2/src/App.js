import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Pricing from './components/Pricing'
import Support from './components/Support'
import Signup from './components/Signup'
import Error from './components/Error'

function App() {
  return (
    <BrowserRouter>
      <div>
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className='navbar-brand ml-5' to="/">
              <img src='https://zerodha.com/static/images/logo.svg' style={{width:'120px'}} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link to='/About'><p className='text-dark mr-5 mt-4'>About</p></Link>
                </li>
                <li>
                  <Link to='/Product'><p className='text-dark mr-5 mt-4'>Products</p></Link>
                </li>
                <li>
                  <Link to='/Pricing'><p className='text-dark mr-5 mt-4'>Pricing</p></Link>
                </li>
                <li>
                  <Link to='/Support'><p className='text-dark mr-5 mt-4'>Support</p></Link>
                </li>
                <li>
                  <Link to='/Signup'><p className='mr-5 btn btn-primary mt-3'>Sign Up</p></Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
          <Route exact path='/' render={()=><Home/>}/>
          <Route exact path='/About' render={()=><About/>}/>
          <Route exact path='/Product' render={()=><Product/>}/>
          <Route exact path='/Pricing' render={()=><Pricing/>}/>
          <Route exact path='/Support' render={()=><Support/>}/>
          <Route exact path='/Signup' render={()=><Signup/>}/>
          <Route render={()=><Error/>}/>
          </Switch>
        </React.Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
