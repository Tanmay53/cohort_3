import React from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Products from './Products'
import Pricing from './Pricing'
import Support from './Support'

class Routing extends React.Component{
  render(){
    return (
      <>
        <Route path="/" exact component={About} />
        <Route path="/products" component={Products} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/support" component={Support} />
      </>
    )
  }
}

export default Routing