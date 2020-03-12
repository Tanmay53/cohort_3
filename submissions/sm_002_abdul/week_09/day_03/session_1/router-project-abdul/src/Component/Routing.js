import React from 'react'
import {Route} from 'react-router-dom'
import AboutUs from './AboutUs'
import Shop from './Shop'
import FAQ from './FAQ'
import Cart from './Cart'
import ProductPage from './ProductPage'


class Routing extends React.Component{
  render(){
    return (
      <>
        <Route exact path="/" component={AboutUs}/>
        <Route exact path="/shop" render={(props)=><Shop {...props}/>}/>
        <Route path="/faq" component={FAQ}/>
        <Route path="/cart" component={Cart}/>
        <Route 
          path="/shop/:id"
          render={(props)=><ProductPage {...props}/>}/> 
      </>
    )
  }
}

export default Routing