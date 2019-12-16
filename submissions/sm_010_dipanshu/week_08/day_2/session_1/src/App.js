import React from "react";
import "./App.css";
import Restaurant from "./components/Restaurant.js";

var restaurants = [
  {
    name: "Brew Cafe",
    categories: ["American", "Mughlai", "Oriental"],
    cost: 400,
    minCost: 50,
    minTime: 30,
    payment: "cash",
    rating: 4.3,
    votes: 344,
    reviews: 22
  },
  {
    name: "Desi Adda",
    categories: ["Mughlai", "Oriental"],
    cost: 200,
    minCost: 100,
    minTime: 45,
    payment: "online",
    rating: 3.4,
    votes: 124,
    reviews: 45
  },
  {
    name: "Om Sweets",
    categories: ["Indian", "Oriental"],
    cost: 500,
    minCost: 300,
    minTime: 15,
    payment: "cash",
    rating: 3.8,
    votes: 254,
    reviews: 145
  },
  {
    name: "Chinese Corner",
    categories: ["Chinese", "Himalayan"],
    cost: 250,
    minCost: 50,
    minTime: 60,
    payment: "cash",
    rating: 4.8,
    votes: 1024,
    reviews: 445
  },
  {
    name: "Awadh Sweets",
    categories: ["American", "Himalayan"],
    cost: 450,
    minCost: 30,
    minTime: 90,
    payment: "online",
    rating: 2.2,
    votes: 876,
    reviews: 231
  },
  {
    name: "Sardar Dhaba",
    categories: ["Punjabi", "Mughlai", "Indian"],
    cost: 200,
    minCost: 30,
    minTime: 20,
    payment: "cash",
    rating: 1.3,
    votes: 16,
    reviews: 3
  },
  {
    name: "Taj Sats",
    categories: ["Oriental", "Mughlai", "Indian"],
    cost: 900,
    minCost: 500,
    minTime: 80,
    payment: "online",
    rating: 3.6,
    votes: 160,
    reviews: 34
  },
  {
    name: "Raj Gharana",
    categories: ["Rajasthani", "Mughlai", "American"],
    cost: 100,
    minCost: 50,
    minTime: 80,
    payment: "cash",
    rating: 4.6,
    votes: 33,
    reviews: 10
  },
  {
    name: "Boti Boti",
    categories: ["Rajasthani", "Mughlai", "Punjabi"],
    cost: 200,
    minCost: 50,
    minTime: 80,
    payment: "cash",
    rating: 1.6,
    votes: 343,
    reviews: 120
  },
  {
    name: "Telugu Desham",
    categories: ["Manglorian", "Mughlai", "Pendu"],
    cost: 400,
    minCost: 150,
    minTime: 30,
    payment: "online",
    rating: 3.6,
    votes: 571,
    reviews: 110
  }
];

var restaurantDB = restaurants;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsList: restaurants
    };
  }

  filter = rating => {
    restaurants = restaurantDB.filter(restaurant => {
      return restaurant.rating > rating;
    });
    this.setState({
      restaurantsList: restaurants
    });
    console.clear();
    console.table(restaurants);
  };

  render() {
    return (
      <div>
        <div className="d-flex mt-5 ml-5 justify-content-center">
          <button
            className="btn btn-primary m-3"
            onClick={() => {
              this.filter(4);
            }}
          >
            4 & above
          </button>
          <button
            className="btn btn-primary m-3"
            onClick={() => {
              this.filter(3);
            }}
          >
            3 & above
          </button>
          <button
            className="btn btn-primary m-3"
            onClick={() => {
              this.filter(2);
            }}
          >
            2 & above
          </button>
          <button
            className="btn btn-primary m-3"
            onClick={() => {
              this.filter(1);
            }}
          >
            1 & above
          </button>
        </div>
        <div className="row">
          {restaurants.map(restaurant => {
            return <Restaurant restaurant={restaurant} key={restaurant.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
