import React, { Suspense } from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Pricing from '../pages/pricing'
import Products from '../pages/products'
import Support from '../pages/support'
import Signup from '../pages/signup'

class RouteMapper extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Route path = "/" exact component = {Home}  />
                <Route path = "/about" component = {About}  />
                <Route path = "/products" component = {Products}  />
                <Route path = "/pricing" component = {Pricing}  />
                <Route path = "/support" component = {Support}  />
                <Route path = "/signup" component = {Signup}  />
            </div>
        )
    }
}

export default RouteMapper