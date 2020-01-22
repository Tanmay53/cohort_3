import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from '../Components/Home';
import Cart from '../Components/Cart';
import Order from '../Components/Order';
import Addproducts from '../Components/Addproducts';
import Item from '../Components/Item';
import Login from '../Components/Login';

class Router extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/addproducts" exact component={Addproducts} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/orders" exact component={Order} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/:id" exact render={(props) => <Item {...props} />} />
                </Switch>
            </>
        )
    }
}
export default Router