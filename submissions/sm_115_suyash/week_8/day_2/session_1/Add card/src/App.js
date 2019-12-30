import React, { Component } from "react";
import "./App.css";
import Card from "./component/card";

class App extends Component {
  RestauRant = [
    {
      title: "Rahul Restaurant",
      catger: "Pizza, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "600",
      reviews: "512",
      star: 4.9,
      min: "30",
      key: "01",
      img: "./img/res1.jpeg"
    },

    {
      title: "Mulberry",
      catger: "Pizza, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "600",
      reviews: "512",
      star: 3.4,
      min: "30",
      key: "02",
      img: "./img/res2.jpeg"
    },

    {
      title: "Ankit Restaurant",
      catger: "Pizza, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "600",
      reviews: "512",
      star: 4.6,
      min: "30",
      key: "03",
      img: "./img/res3.jpeg"
    },

    {
      title: "Anand Restaurant",
      catger: "Pizza, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "600",
      reviews: "512",
      star: 4.4,
      min: "30",
      key: "04",
      img: "./img/res4.jpeg"
    },

    {
      title: "Mandal Restaurant",
      catger: "Pizza, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "600",
      reviews: "512",
      star: 3.4,
      min: "30",
      key: "05",
      img: "./img/res5.jpeg"
    },

    {
      title: "Plebs Restaurant",
      catger: "Pizza, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "600",
      reviews: "512",
      star: 3.7,
      min: "30",
      key: "06",
      img: "./img/res6.jpeg"
    },

    {
      title: "South Indian Restaurant",
      catger: "Pizza, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "600",
      reviews: "512",
      star: 3.4,
      min: "30",
      key: "07",
      img: "./img/res7.jpeg"
    },

    {
      title: "SMB Restaurant",
      catger: "Pizza, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "600",
      reviews: "512",
      star: 1.4,
      min: "30",
      key: "08",
      img: "./img/res8.jpeg"
    },

    {
      title: "Apana Restaurant",
      catger: "Pizza, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "680",
      reviews: "580",
      star: 2.4,
      min: "30",
      key: "09",
      img: "./img/res5.jpeg"
    },

    {
      title: "Gupta Restaurant",
      catger: "Samosa, Chowim, Dosa",
      cost: "40$",
      payMethod: "Online only",
      votes: "800",
      reviews: "912",
      star: 4.8,
      min: "30",
      key: "10",
      img: "./img/res4.jpeg"
    }
  ];
  state = {
    Restaurant: this.RestauRant
  };

  sortByStar = star => {
    // console.log("realArray", this.state.Restaurant);
    const resto = [...this.RestauRant];
    // console.log("spreadArray", resto);
    const filterRes = resto.filter((rest, index) => {
      // console.log(resto[index].star);
      return resto[index].star >= star;
    });

    // console.log("filterArray", filterRes);
    this.setState({
      Restaurant: filterRes
    });
  };

  render() {
    const restaurant = (
      <div className="d-flex flex-wrap  w-100">
        {this.state.Restaurant.map(res => {
          return (
            <Card
              title={res.title}
              catger={res.catger}
              cost={res.cost}
              payMethod={res.payMethod}
              votes={res.votes}
              reviews={res.reviews}
              star={res.star}
              min={res.min}
              img={res.img}
              key={res.key}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <h2>Choose a Restaurant given below...</h2>
        <div className="w-100">{restaurant}</div>
        <button onClick={() => this.sortByStar(4)}>4 Star</button>
        <button onClick={() => this.sortByStar(3)}>3 Star</button>
        <button onClick={() => this.sortByStar(2)}>2 Star</button>
        <button onClick={() => this.sortByStar(1)}>1 Star</button>
      </div>
    );
  }
}

export default App;
