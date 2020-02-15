import React from 'react';

import {Route,Link} from 'react-router-dom';

import Pricing from './Pricing'
import Products from './Products'
import About from './About'
import SignUp from './SignUp'
import Support from './Support'
import Zerodha from './Zerodha'

export default class Routes extends React.Component{

  render(){
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
        <ul><li className="nav-brand m-2"> 
        <Link to="/"><img src="https://zerodha.com/static/images/logo.svg" style={{width:"200px"}} alt = "ZeroDha"/> </Link>
            
         </li></ul>
       

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav offset-7">
            <li className="nav-item active m-2">
            <Link className="text-muted text-decoration-none" to="/about">About</Link>
            
            </li>
            <li className="nav-item m-2">
            <Link className="text-muted text-decoration-none" to="/products">Products</Link>
           
            </li>
            <li className="nav-item m-2">
            <Link className="text-muted text-decoration-none" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item m-2">
            <Link className="text-muted text-decoration-none" to="/support">Support</Link>
            </li>

          </ul>
          <button className="btn btn-primary m-2 "> <Link className="text-white" to="/signUp">SignUp</Link>          
         
          </button>
        </div>
      </nav>

      <Route exact path ="/" component = {Zerodha}/>
      <Route path = "/about" component = {About} />
      <Route path = "/products" component = {Products} />
      <Route path = "/pricing" component = {Pricing} />
      <Route path = "/support" component = {Support} />
      <Route path ="/signUp" component ={SignUp} />
        </React.Fragment>
    )
  }
}