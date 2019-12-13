import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card'
import { render } from '@testing-library/react';
import { func } from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants : [{name: 'Restaurent 1', img:'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' , rating : 2},
               {name: 'Restaurent 2', img: 'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' ,rating : 3},
               {name: 'Restaurent 3', img: 'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' ,rating : 4},
               {name: 'Restaurent 4', img: 'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' ,rating : 1},
               {name: 'Restaurent 5', img: 'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' ,rating : 2.2},
               {name: 'Restaurent 6', img: 'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' ,rating : 3.2},
               {name: 'Restaurent 7', img: 'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' ,rating : 2.4},
               {name: 'Restaurent 8', img: 'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' ,rating : 4.2},
               {name: 'Restaurent 9', img: 'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' ,rating : 4.1},
               {name: 'Restaurent 10',img: 'https://m.media-amazon.com/images/I/51ReC27tvUL._AA256_.jpg' , rating : 1},
              ]
    }
  }

  GenerateCards(props) {
    return (
      <div>
        {props.value.map((restaurent) => {
          return <Card key={restaurent.name} value = {restaurent}/>
        })}
      </div>
    ) 
  }

  sortRestaurants = () => {
    //console.log(this.state.restaurants)
    this.setState({
      restaurants : this.state.restaurants.sort((a, b) => a.rating - b.rating)
    }) 
    //console.log(this.state.restaurants)
  }  

  filterRestaurants = (rating) => {
    this.setState({
      restaurants : this.state.restaurants.filter((a) => a.rating > Number(rating))
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.sortRestaurants()}  className='btn btn-primary m-3'>sort</button>
          <button onClick = {() => this.filterRestaurants('1')} className='btn btn-primary m-3'>1 star</button>
          <button onClick = {() => this.filterRestaurants('2')} className='btn btn-primary m-3'>2 star</button>
          <button onClick = {() => this.filterRestaurants('3')} className='btn btn-primary m-3'>3 star</button>
          <button onClick = {() => this.filterRestaurants('4')} className='btn btn-primary m-3'>4 star</button>
          <this.GenerateCards value={this.state.restaurants}/>
        </header>
      </div>
    );
  }
}
export default App;
