import React from "react"
import {Switch,Route} from "react-router"

import Home from '../pages/Home'
import AddProducts from '../pages/AddProducts'
import FAQ from '../pages/FAQ'
import Cart from '../pages/Cart'
import Orders from '../pages/Orders'
import EditPage from "../pages/EditPage"
import PageNotFound from '../pages/PageNotFound'

function Routes(){
  return (
    <>
      <Switch>

        <Route exact path="/" component={Home}/>

        <Route exact path="/addproducts" component={AddProducts}/>

        <Route path="/faq" component={FAQ}/>

        <Route path="/cart" component={Cart}/>

        <Route path="/orders" component={Orders}/>

        <Route path="/addproducts/:id" component={EditPage}/>

        <Route component={PageNotFound}/>

      </Switch>
    </>
  )
}

export default Routes