import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from './HomePage'
import Mens from './mens/Mens'
import Womens from './womens/Womens.jsx'
import About from './About'
const Routes = () => {
    return (
        <React.Fragment>
            <Route exact path="/" component = {HomePage} />
            <Route  path="/mens" component = {Mens} />
            <Route  path="/womens" component = {Womens} />
            <Route  path="/about" component = {About} />
        </React.Fragment>
    )
}

export default Routes