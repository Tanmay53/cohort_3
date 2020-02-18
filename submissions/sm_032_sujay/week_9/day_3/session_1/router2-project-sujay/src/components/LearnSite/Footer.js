// import React from 'react'
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


import ODS from './ODS'
import CSR from './CSR'
import Legal from './Legal'
import Careers from './Careers'
import GitHub from './GitHub'


export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-dark text-info">
          <div className="row">
          <div className="col-3 mx-1">
            <Link to="/CSR" className="text-decoration-none text-info" > <p >Corporate Social Responsibility</p></Link>
            <div className="d-flex flex-column">
              <p>Paper Bag Campaign</p>
              <p> One Sided Books</p>
              <p> Educate Rural India</p>
              <p> Code Vidhya</p>
            </div>
          </div>

          <div className="col-2 mx-1">
            <Link to="/ODS" className="text-decoration-none text-info font-weight-heavy"><p>ODS</p></Link>
          </div>
          <div className="col-2 mx-1">
            <Link to="/careers" className="text-decoration-none text-info font-weight-heavy" > <p>Careers</p></Link>
          </div>
          </div>
          <p className="text-center"> Copyright@2020 </p>
        
          <div className=" bg-dark">
            <div className="row">
              <div className="col-2 ">
                <Link to="/legal" className="text-info"> Legal</Link>
              </div>

              <div className="col-1 offset-7  ">

              </div>

              <div className=" col-1 ">

              </div>

              <div className=" col-1 ">
                <Link to="/github"> <img /> </Link>
              </div>
            </div>
          </div>
          </div>
       


        <Route path="/CSR" component={CSR} />
        <Route path="/ODS" component={ODS} />
        <Route path="/legal" component={Legal} />
        <Route path="/careers" component={Careers} />
        <Route path="/github" component={GitHub} />

      </React.Fragment>
    )
  }
}

