import React from 'react';
import './App.css';
import CardRestro from './component/cardRest';
let style = {
  background: 'orange',
  color: 'white',
  padding: '.6rem',
  borderRadius: '5px',
  border: 'none',
  margin: '1rem'
};
let restraunt = [
  {
    name: 'Parallel 37',
    catagory: 'Pizza, Continental, Asian',
    cost: 600,
    min: 50,
    time: 30,
    payment: 'Accept online payment only',
    rating: 1.3,
    votes: 766,
    reviews: 512
  },
  {
    name: 'Starbelly',
    catagory: 'Burger , Cusine , America',
    cost: 400,
    min: 30,
    time: 15,
    payment: 'Accept online payment and cash',
    rating: 4.1,
    votes: 451,
    reviews: 514
  },
  {
    name: 'Cafe Coffee Day',
    catagory: 'Mocha, Latte, cuppachino, India',
    cost: 150,
    min: 110,
    time: 25,
    payment: 'Accept online payment and cash',
    rating: 4.4,
    votes: 454,
    reviews: 787
  },
  {
    name: 'Pizza',
    catagory: 'Pizza, Continental, Asian',
    cost: 600,
    min: 50,
    time: 30,
    payment: 'Accept online payment only',
    rating: 4.3,
    votes: 766,
    reviews: 512
  },
  {
    name: 'Parallel 37',
    catagory: 'Pizza, Continental, Asian',
    cost: 600,
    min: 50,
    time: 30,
    payment: 'Accept online payment only',
    rating: 4.3,
    votes: 766,
    reviews: 512
  },
  {
    name: 'Starbelly',
    catagory: 'Burger , Cusine , America',
    cost: 400,
    min: 30,
    time: 15,
    payment: 'Accept online payment and cash',
    rating: 4.1,
    votes: 451,
    reviews: 514
  },
  {
    name: 'Cafe Coffee Day',
    catagory: 'Mocha, Latte, cuppachino, India',
    cost: 150,
    min: 110,
    time: 25,
    payment: 'Accept online payment and cash',
    rating: 4.4,
    votes: 454,
    reviews: 787
  },
  {
    name: 'Pizza',
    catagory: 'Pizza, Continental, Asian',
    cost: 600,
    min: 50,
    time: 30,
    payment: 'Accept online payment only',
    rating: 4.3,
    votes: 766,
    reviews: 512
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restro: restraunt
    };
  }

  sortByRating = input => {
    input.sort((a, b) => {
      const rateA = a.rating;
      const rateB = b.rating;
      return rateA - rateB;
    });
    this.setState({ restro: input });
  };

  showRating = (input, target) => {
    let newState = input.filter(restro => {
      if (restro.rating > target && restro.rating < target + 1) {
        return restro;
      }
    });

    this.setState({ restro: newState });
  };

  render() {
    return (
      <div className='App'>
        <button style={style} onClick={() => this.sortByRating(restraunt)}>
          Sort By Rating
        </button>
        <button
          style={{ ...style, padding: '.6rem 1.4rem' }}
          onClick={() => this.showRating(restraunt, 1)}
        >
          1
        </button>
        <button
          style={{ ...style, padding: '.6rem 1.4rem' }}
          onClick={() => this.showRating(restraunt, 2)}
        >
          2
        </button>
        <button
          style={{ ...style, padding: '.6rem 1.4rem' }}
          onClick={() => this.showRating(restraunt, 3)}
        >
          3
        </button>
        <button
          style={{ ...style, padding: '.6rem 1.4rem' }}
          onClick={() => this.showRating(restraunt, 4)}
        >
          4
        </button>
        {this.state.restro.map(user => {
          return <CardRestro user={user} />;
        })}
      </div>
    );
  }
}

export default App;
