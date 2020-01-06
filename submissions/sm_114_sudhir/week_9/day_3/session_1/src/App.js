import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Home from './component/Home'
import Product from './component/Product'
import NotFound from './component/NotFound'

const App = () => {
    return (
        <React.Fragment>
            <div>
                <h1>Shopping Center</h1>
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                </ol>
            </div>
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/product" component = {Product} />
                <Route component={NotFound} />
            </Switch>
            {/* <Route path="/product/:id" component={AddToCart} /> */}
   
        </React.Fragment>
    )
}

export default App;