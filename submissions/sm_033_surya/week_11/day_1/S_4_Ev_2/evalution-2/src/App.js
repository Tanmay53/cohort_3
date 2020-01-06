import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Product from './Components/Product/Product';
import Web from './Components/Web/web'

class App extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div>
        <Login/>
        <hr/>
        <Product />
        <hr/>
        <Web />
        </div>
    )
  }
}

export default App;
