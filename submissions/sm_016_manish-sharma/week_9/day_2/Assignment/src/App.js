import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom"
import Home from './components/Home'
import About from './components/About';
import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-white bg-white sticky-top">
      
            <Link className='navbar-brand ml-2' to="/">
              <img src='./VMlogo.png' style={{width:'120px'}} /> 
              <span className='h2 font-weight-bold text-success ml-2'>VILLAGE MART</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i class="material-icons"> menu </i></span>
            </button>
            <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent" >
              <ul className="navbar-nav ml-auto">
              <li>
                  <Link to='/'><p className='text-dark my-2 mr-5'>Home</p></Link>
                </li>
                <li>
                  <Link to='/about'><p className='text-dark my-2 mr-5'>About</p></Link>
                </li>
                <li>
                  <div class="dropdown mr-5">
                      <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop With Us</button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p className='dropdown-item'><Link className='text-success' to='/fruits'>Fruits</Link></p>
                            <p className='dropdown-item'><Link className='text-success' to='/vegetables'>Vegetables</Link></p>
                      </div>
                  </div>
                </li>
                <li>
                  <Link to='/About'><p className='text-dark my-2 mr-5'>Login</p></Link>
                </li>
                <li>
                  <Link to='/About'><i className="material-icons" style={{fontSize:'40px'}}> shopping_cart </i></Link>
                </li>
              </ul>
            </div>
        </nav>


        <Switch>
          <Route exact path='/' render={()=><Home/>} />
          <Route exact path='/about' render={()=><About/>} />
          <Route exact path='/fruits' render={()=><Fruits/>} />
          <Route exact path='/vegetables' render={()=><Vegetables/>} />
        </Switch>

        <div className='bg-dark text-white d-flex py-4' style={{fontSize:'12px'}}>
          <div className='mx-5'>
            <div className='font-weight-bold'>Support</div>
            <br></br>
            <p>Contact us</p>
            <p>FAQs</p>
            <p>Help</p>
          </div>
          <div className='mx-5'>
            <div className='font-weight-bold'>Shop</div>
            <br></br>
            <p>Fruits</p>
            <p>Vegetables</p>
          </div>
          <div className='dropdown-divider text-white'></div>
        </div>
        <div className='bg-secondary text-white text-center'>
          <div>MADE WITH 💟 AT MASAI</div>
          <div className='font-italic'><small>DISCLAIMER: I do not claim ownership of any of the images on this website</small></div>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
