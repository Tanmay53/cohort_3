import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import data from './data'
import RestaurantDetails from './component/RestaurantDetails'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      restaurantData:data
    }

  }

  render(){
   
    const detailsPassedToChild=this.state.restaurantData.map(item=><RestaurantDetails item={item}/>)
    return(
    <div>{detailsPassedToChild}</div>
    )
  }
}

export default App;

ReactDOM.render(<App/>,document.getElementById('root'))
