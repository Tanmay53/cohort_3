import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

import data from './data'
import RestaurantDetails from './component/RestaurantDetails'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      restaurantData:data
    }
    this.handleClick1=this.handleClick1.bind(this)
    this.handleClick2=this.handleClick2.bind(this)
    this.handleClick3=this.handleClick3.bind(this)
    this.handleClick4=this.handleClick4.bind(this)
  }

  handleClick1(){
    console.log('clicked 1 star')
    this.setState(prevState=>{
      var arr=prevState.restaurantData.filter(el=>(Number(el.rating))>1)
      console.log(arr)
      return {
        restaurantData: arr
      }
    })
  }

  handleClick2(){
    console.log('clicked 2 star')
    this.setState(prevState=>{
      var arr=prevState.restaurantData.filter(el=>(Number(el.rating))>2)
      console.log(arr)
      return {
        restaurantData: arr
      }
    })
  }

  handleClick3(){
    console.log('clicked 3 star')
    this.setState(prevState=>{
      var arr=prevState.restaurantData.filter(el=>(Number(el.rating))>3)
      console.log(arr)
      return {
        restaurantData: arr
      }
    })
  }

  handleClick4(){
    console.log('clicked 4 star')
    this.setState(prevState=>{
      var arr=prevState.restaurantData.filter(el=>(Number(el.rating))>4)
      console.log(arr)
      return {
        restaurantData: arr
      }
    })
  }

  render(){
    console.log(this.state.restaurantData)
    let detailsPassedToChild=this.state.restaurantData.map(item=><RestaurantDetails item={item}/>)
    console.log(detailsPassedToChild)
    return(
      <div>
        <button onClick={this.handleClick1}>1 Star</button>
        <button onClick={this.handleClick2}>2 Star</button>
        <button onClick={this.handleClick3}>3 Star</button>
        <button onClick={this.handleClick4}>4 Star</button>
        {detailsPassedToChild}
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App/>,document.getElementById('root'))
