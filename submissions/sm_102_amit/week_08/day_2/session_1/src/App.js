import React, { Component } from "react";
import RestaurantDetails from "./component/RestaurantDetails";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [
        {
          id: 1,
          name: "Parallel 37",
          category: "Pizza, Continental, Asian",
          cost: 600,
          min: 50,
          time: 30,
          payment: "Accept online payment only",
          rating: 2.3,
          votes: 766,
          reviews: 512
        },
        {
          id: 2,
          name: "Starbelly",
          category: "Burger , Cusine , America",
          cost: 400,
          min: 30,
          time: 15,
          payment: "Accept online payment and cash",
          rating: 4.1,
          votes: 451,
          reviews: 514
        },
        {
          id: 3,
          name: "Cafe Coffee Day",
          category: "Mocha, Latte, cuppachino, India",
          cost: 150,
          min: 110,
          time: 25,
          payment: "Accept online payment and cash",
          rating: 3.4,
          votes: 454,
          reviews: 787
        },
        {
          id: 4,
          name: "Pizza",
          category: "Pizza, Continental, Asian",
          cost: 600,
          min: 50,
          time: 30,
          payment: "Accept online payment only",
          rating: 3.3,
          votes: 766,
          reviews: 512
        },
        {
          id: 5,
          name: "Parallel 37",
          category: "Pizza, Continental, Asian",
          cost: 600,
          min: 50,
          time: 30,
          payment: "Accept online payment only",
          rating: 2.7,
          votes: 766,
          reviews: 512
        },
        {
          id: 6,
          name: "Starbelly",
          category: "Burger , Cusine , America",
          cost: 400,
          min: 30,
          time: 15,
          payment: "Accept online payment and cash",
          rating: 1.1,
          votes: 451,
          reviews: 514
        },
        {
          id: 7,
          name: "Cafe Coffee Day",
          category: "Mocha, Latte, cuppachino, India",
          cost: 150,
          min: 110,
          time: 25,
          payment: "Accept online payment and cash",
          rating: 4.4,
          votes: 454,
          reviews: 787
        },
        {
          id: 8,
          name: "Pizza",
          category: "Pizza, Continental, Asian",
          cost: 600,
          min: 50,
          time: 30,
          payment: "Accept online payment only",
          rating: 3.9,
          votes: 766,
          reviews: 512
        }
      ]
    };
  }

  data = this.state.restaurants;

  filterRestaurants = e => {
    console.log(e.target.value);
    let val = e.target.value;
    this.setState({
      restaurants: this.state.restaurants.filter(r => {
        return r.rating > val;
      })
    });

    console.log(this.state.restaurants);
  };

  render() {
    return (
      <div className="container py-5">
        <div className="form-group">
          <label htmlFor="filter">Filter Restaurants</label>
          <select
            className="form-control"
            id="filter"
            onChange={this.filterRestaurants}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <hr />
        <div className="row">
          <RestaurantDetails list={this.state.restaurants} />
        </div>
      </div>
    );
  }
}

export default App;
