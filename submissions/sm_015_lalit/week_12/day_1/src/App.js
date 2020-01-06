import React from 'react';
import Login from './components/login/Login'
import Slack from './components/web/Slack'
import Cart from './components/product/Cart'

class App extends React.Component{
  render(){
    return(
      <div>
        <Login />
        <hr/>
        <Cart />
        <hr/>
        <Slack />
      </div>
    )
  }
}

export default App;
