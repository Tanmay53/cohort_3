import React from 'react';
import './App.css';
import About from './practice/About'
import Home from './practice/Home'
import Contact from './practice/Contact'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Software from "./practice/Software"
import Devices from "./practice/Devices"
import Login from './practice/Login'
import Services from './practice/Services'
import Cart from './practice/Cart'

export default class App extends React.Component
{
  render()
  {
    return(
      <React.Fragment>
        <div className="bg-dark ">
          <h4 className="text-white mb-0 pb-3 pt-4 text-center">30% Off on first Purchase. Use code <u>FIRST30</u> to redeem</h4>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:"white"}}>
          
            <ul className="nav">
                <li className="nav-item">
                  <Link className="m-2 p-4 text-dark" to="/home"><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="logo" width="120px"></img></Link>
                </li>
                <li className="nav-item">
                  <Link className="m-2 p-4 text-dark" to="/about">office</Link>
                </li>
                <li className="nav-item">
                  <Link className="m-2 p-4 text-dark" to="/contact">windows</Link>
                </li>
                <li className= "nav-item">
                  <div className="dropdown mb-2">
                    <button className="btn btn-secondary dropdown-toggle text-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"white"}}>Products</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <div>
                        <Link to="/course/software" className="text-dark ml-2">Software</Link>
                      </div>
                      <div>
                        <Link to="/course/devices" className="text-dark ml-2">PC's and Devices</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="m-2 p-4 text-dark" to="/services">support</Link>
                </li>
              </ul>
              <button className = "btn  btn-outline-success ml-auto">
                <Link className="p-2 text-dark" to="/cart">Cart</Link>
              </button>
              <button className = "btn  btn-outline-info ml-2">
                <Link className="p-2 text-dark" to="/login">Login</Link>
              </button>
        </nav>
        <hr></hr>
        <Route path = "/home" exact component = {Home} />
        <Route path = "/about" exact component = {About} />
        <Route path = "/contact" exact component = {Contact} />
        <Route path = "/course/software" component = {Software} />
        <Route path = "/course/devices" component = {Devices} />
        <Route path = "/services" component = {Services} />
        <Route path = "/login" component = {Login} />
        <Route path = "/cart" component = {Cart} />
        <br></br>
        <div style={{backgroundColor:"#F2F2F2"}}>
          <div className="row">
            <h5 className="p-5">Follow us at :</h5>
            <span className=" d-inline-block mt-5">
                <a href="https://www.facebook.com/akmallik025" target="_target">
                  <i class="fab fa-facebook fa-2x "></i>
                </a>
                <a href="https://twitter.com/Krsna_apoorv" target="_target" className="ml-2">
                  <i class="fab fa-twitter fa-2x "></i>
                </a>
                <a href="https://www.linkedin.com/in/apoorva-krishna-078a5112b/" target="_target" className="ml-2">
                  <i class="fab fa-linkedin-in fa-2x"></i>
                </a>
            </span> 
          </div>
          <div className="row">
             <div className="col ml-5">
                <h5>What's new</h5>
                <p >Surface Go</p>
                <p >Surface Pro</p>
                <p >Windows 10 apps</p>
                <p >Office apps</p>
             </div>
             <div className="col">
                <h5>Microsoft store</h5>
                <p>Account profile</p>
                <p>Download Center</p>
                <p>Microsoft Store Support</p>
                <p>Returns</p>
                <p>Order tracking</p>
             </div>
             <div className="col">
                <h5>Education</h5>
                <p>Microsoft in education</p>
                <p>Office for students</p>
                <p>Office 365 for schools</p>
                <p>Microsoft Azure in education</p>
                <p>Office apps</p>
             </div>
             <div className="col">
                <h5>Enterprise</h5>
                <p>Azure</p>
                <p>AppSource</p>
                <p>Automotive</p>
                <p>Government</p>
                <p>Healthcare</p>
                <p>Manufacturing</p>
                <p>Financial services</p>
                <p>Retail</p>
             </div>
             <div className="col">
                <h5 >Developer</h5>
                <p>Microsoft Visual Studio</p>
                <p>Developer Network</p>
                <p>TechNet</p>
                <p>Channel 9</p>
                <p>Office  Dev Center</p>
             </div>
             <div className="col">
                <h5>Company</h5>
                <p >Carrers</p>
                <p >About Microsoft</p>
                <p >Company News</p>
                <p >Privacy at Microsoft</p>
                <p >Investor</p>
                <p >Security</p>
             </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
};
