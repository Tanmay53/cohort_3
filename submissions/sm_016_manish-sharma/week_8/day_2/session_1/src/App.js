import React from 'react';
import './App.css';
import Card from './components/Card'
import Button from './components/Button'

var data = [
  {
    name: 'Cafe Coffee Day',
    ratings: 3.8,
    contents: 'Hot drinks, Snacks',
    cost: '₹200 for one',
    payment: 'Accepts online payments only',
    votes: '1766 votes',
    reviews: '811 reviews'
  },
  {
    name: 'McDonalds',
    ratings: 4.5,
    contents: 'Unhealthy junk food, Cold drinks',
    cost: '₹100 for  one',
    payment: 'Accepts online and cash payments',
    votes: '2555 votes',
    reviews: '1546 reviews'
  },
  {
    name: 'Dominoes',
    ratings: 4.0,
    contents: 'Cheap pizza',
    cost: '₹150 for one',
    payment: 'Accepts online payments and cash',
    votes: '1822 votes',
    reviews: '1100 reviews'
  },
  {
    name: 'Haldirams',
    ratings: 4.6,
    contents: 'Desi snacks and Dishes',
    cost: '₹120 for one',
    payment: 'Accepts online payments and cash',
    votes: '2822 votes',
    reviews: '1440 reviews'
  },
  {
    name: 'Starbucks',
    ratings: 2.5,
    contents: 'Expensive hot drinks',
    cost: '₹400 for one',
    payment: 'Accepts online payments only',
    votes: '612 votes',
    reviews: '211 reviews'
  },
  {
    name: 'Subway',
    ratings: 2.9,
    contents: 'Snacks and Salads',
    cost: '₹300 for one',
    payment: 'Accepts online payments and cash',
    votes: '766 votes',
    reviews: '212 reviews'
  },
  {
    name: 'Burger King',
    ratings: 2.3,
    contents: 'Burgers, Cold drinks',
    cost: '₹100 for  one',
    payment: 'Accepts online and cash payments',
    votes: '1010 votes',
    reviews: '543 reviews'
  },
  {
    name: 'Pizza hut',
    ratings: 3.7,
    contents: 'Unhealthy pizza',
    cost: '₹120 for one',
    payment: 'Accepts cash only',
    votes: '3222 votes',
    reviews: '1200 reviews'
  },
  {
    name: 'Chaayos',
    ratings: 4.1,
    contents: 'Tea and snacks',
    cost: '₹60 for one',
    payment: 'Accepts online payments and cash',
    votes: '1122 votes',
    reviews: '440 reviews'
  },
  {
    name: 'Karims',
    ratings: 1.5,
    contents: 'Unhealthy meat/chicken',
    cost: '₹300 for one',
    payment: 'Accepts cash only',
    votes: '922 votes',
    reviews: '321 reviews'
  }
]

var btns = [['1 star', 'one'], ['2 star', 'two'], ['3 star', 'three'], ['4 star', 'four']]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataArr: data
    }
  }

  callback=(childData)=>{
    switch (childData){
      case 'one': this.setState({dataArr:data.filter(e=>e.ratings>1)})
      break;
      case 'two': this.setState({dataArr:data.filter(e=>e.ratings>2)})
      break;
      case 'three': this.setState({dataArr:data.filter(e=>e.ratings>3)})
      break;
      case 'four': this.setState({dataArr:data.filter(e=>e.ratings>4)})
      break;
    }
  }


  render() {
      return (
        <div>
          <div className='row mx-auto'>
            <h2>Sort By:</h2>
            {btns.map((e) =>
              <Button parentCallback={this.callback} key={e[1]} txt={e[0]} id={e[1]} />)}
          </div>
          <hr />
          <div className='row mx-auto'>
            {this.state.dataArr.map((e) =>
              <Card key={e.name} obj={e} />
            )}
          </div>
        </div>
      );
    }
}

export default App;
