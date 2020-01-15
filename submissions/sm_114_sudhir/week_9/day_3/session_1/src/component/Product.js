import React from 'react'
import Food from './Food'
import Clothes from './Clothes'
import Electrical from './Electrical'
import {Route, Link, Switch} from "react-router-dom"
import AddToCart from './addToCart'
import Notfound from './NotFound'

const Product = ({match}) => {
    return (
        <React.Fragment>       
            <h1>Product</h1>
            <ol>
                <li>
                    <Link to={`${match.url}/food`}>Food</Link>
                </li>
                <li>
                    <Link to={`${match.url}/clothes`}>Clothes</Link>
                </li>
                <li>
                    <Link to={`${match.url}/electrical`}>Electrical</Link>
                </li>
               
            </ol>
            <Switch>
                <Route path={`${match.path}/food`} exact component = {Food} />
                <Route path={`${match.path}/clothes`} exact component = {Clothes} />
                <Route path={`${match.path}/electrical`} exact component = {Electrical} />
                <Route path={`${match.path}/clothes/:id`} render={(props)=><AddToCart {...props}/>} /> 
                <Route path={`${match.path}/food/:id`} render={(props) => <AddToCart {...props} />} />
                <Route path={`${match.path}/electrical/:id`} render={(props) => <AddToCart {...props} />} />
                <Route component={Notfound} />
            </Switch>
        </React.Fragment>
    )
}

export default Product;

