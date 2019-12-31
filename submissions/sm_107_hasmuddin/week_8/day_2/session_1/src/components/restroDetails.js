import React from "react";
import Restrocard from "./restrocard";

class RestroDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        {
          name: "URU Brewpark",
          paymentMethod: "Accept online payment only",
          votes: 766,
          review: 512,
          cost: 50,
          rate: 4.1,
          category: "Dessert"
        },
        {
          name: "Gulab Jamun",
          paymentMethod: "Accept online payment only",
          votes: 273,
          review: 123,
          cost: 100,
          rate: 3,
          category: "Dessert"
        },
        {
          name: "Lal Jamun",
          paymentMethod: "Accept online payment only",
          votes: 273,
          review: 123,
          cost: 60,
          rate: 2,
          category: "Dessert"
        },
        {
          name: "Aloo Bharta",
          paymentMethod: "Accept online and COD",
          votes: 123,
          review: 23,
          cost: 900,
          rate: 2,
          category: "Vegetables"
        },
        {
          name: "Jamun",
          paymentMethod: "Accept online payment only",
          votes: 973,
          review: 1123,
          cost: 500,
          rate: 4.4,
          category: "Fruits"
        },
        {
          name: "Laddu",
          paymentMethod: "Accept online payment only",
          votes: 203,
          review: 223,
          cost: 60,
          rate: 1,
          category: "Dessert"
        },
        {
          name: "Rajma Chawal",
          paymentMethod: "Accept online payment only",
          votes: 273,
          review: 123,
          cost: 300,
          rate: 4,
          category: "Foods"
        },
        {
          name: "Rasgulla",
          paymentMethod: "Accept online payment only",
          votes: 473,
          review: 1223,
          cost: 400,
          rate: 5,
          category: "Dessert"
        },
        {
          name: "Paneer",
          paymentMethod: "Accept online payment only",
          votes: 2133,
          review: 4123,
          cost: 500,
          rate: 3.9,
          category: "Veggetable"
        },
        {
          name: "Makkhan",
          paymentMethod: "Accept online payment only",
          votes: 2713,
          review: 1323,
          cost: 1400,
          rate: 2,
          category: "Dessert"
        }
      ]
    };
  }

  sortByRate = () => {
    function sorting(a, b) {
      a = a.rate;
      b = b.rate;
      let cont = 0;
      if (a > b) {
        cont = 1;
      } else if (a < b) {
        cont = -1;
      }
      return cont;
    }
    this.setState({
      food: this.state.food.sort(sorting)
    });
  };

  rateOne = () => {
    this.setState({
      food: this.state.food.filter(item => {
        return item.rate <= 1 && item.rate < 2;
      })
    });
  };
  rateTwo = () => {
    this.setState({
      food: this.state.food.filter(item => {
        return item.rate == 2 && item.rate < 3;
      })
    });
  };
  rateThree = () => {
    this.setState({
      food: this.state.food.filter(item => {
        return item.rate == 3 && item.rate < 4;
      })
    });
  };
  rateFour = () => {
    this.setState({
      food: this.state.food.filter(item => {
        return item.rate >= 4;
      })
    });
  };

  dataExtractor = () => {
    let data = this.state.food.map(user => {
      return (
        <Restrocard
          name={user.name}
          payment={user.paymentMethod}
          votes={user.votes}
          cost={user.cost}
          review={user.review}
          rate={user.rate}
          category={user.category}
        />
      );
    });
    return data;
  };
  render() {
    return (
      <div>
        <button className="btn btn-outline-info" onClick={this.sortByRate}>
          Sort by Rate
        </button>
        <button className="btn btn-outline-danger" onClick={this.rateOne}>
          Rate 1
        </button>
        <button className="btn btn-outline-dark" onClick={this.rateTwo}>
          Rate 2
        </button>
        <button className="btn btn-outline-info" onClick={this.rateThree}>
          Rate 3
        </button>
        <button className="btn btn-outline-success" onClick={this.rateFour}>
          Rate 4
        </button>
        <this.dataExtractor />
      </div>
    );
  }
}

export default RestroDetails;
