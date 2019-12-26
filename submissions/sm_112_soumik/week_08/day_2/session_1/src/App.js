import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const data = [
    {
      name: "URU Brewpark",
      cardPayment: ["paytm", "GPay", "PhonePay"],
      votes: 600,
      reviews: 200,
      costForOne: 100,
      catagories: ["indian", "Chinese", "Thai"],
      rating: 4.2
    },
    {
      name: "Brew Spice",
      cardPayment: ["Only Cash"],
      votes: 300,
      reviews: 180,
      costForOne: 300,
      catagories: ["indian", "Chinese", "Thai"],
      rating: 3.75
    },
    {
      name: "Bawarchi",
      cardPayment: ["cash", "paytm", "GPay", "PhonePay"],
      votes: 1200,
      reviews: 490,
      costForOne: 500,
      catagories: ["indian"],
      rating: 4.7
    },
    {
      name: "KFC",
      cardPayment: ["paytm", "GPay", "PhonePay", "cash"],
      votes: 600,
      reviews: 200,
      costForOne: 100,
      catagories: ["Chicken"],
      rating: 4.1
    },
    {
      name: "Dominos",
      cardPayment: ["paytm", "GPay", "PhonePay"],
      votes: 600,
      reviews: 200,
      costForOne: 100,
      catagories: ["Pizza"],
      rating: 4.2
    },
    {
      name: "URU Brewpark",
      cardPayment: ["paytm", "GPay", "PhonePay"],
      votes: 600,
      reviews: 200,
      costForOne: 100,
      catagories: ["indian", "Chinese", "Thai"],
      rating: 4.2
    },
    {
      name: "BBQ Nation",
      cardPayment: ["paytm", "GPay", "PhonePay"],
      votes: 600,
      reviews: 200,
      costForOne: 100,
      catagories: ["indian", "Chinese", "Thai"],
      rating: 4.2
    },
    {
      name: "Yellow Chiili",
      cardPayment: ["paytm", "GPay", "PhonePay"],
      votes: 600,
      reviews: 200,
      costForOne: 100,
      catagories: ["indian", "Chinese", "Thai"],
      rating: 4.2
    },
    {
      name: "Hangouts",
      cardPayment: ["paytm", "GPay", "PhonePay"],
      votes: 600,
      reviews: 200,
      costForOne: 100,
      catagories: ["indian", "Chinese", "Thai"],
      rating: 4.2
    },
    {
      name: "Garage Cafe",
      cardPayment: ["paytm", "GPay", "PhonePay"],
      votes: 600,
      reviews: 200,
      costForOne: 100,
      catagories: ["indian", "Chinese", "Thai"],
      rating: 4.2
    }
  ];
  return (
    <div className="App">
      <h1>Resturant Details</h1>
      <div className="row">
        {data.map(item => (
          <Card lable={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
