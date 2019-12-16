import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = [
  {
    name: "Sura Vie",
    categories: ["North Indian", "Italian", "Chinese", "Kebab"],
    costOne: 600,
    paymentMethods: "Accepts cash & online payment",
    rating: 4.6,
    votes: 2337,
    reviews: 1928
  },
  {
    name: "The Chatter House",
    categories: ["Finger Food", "Italian", "North Indian"],
    costOne: 800,
    paymentMethods: "Accepts cash & online payment",
    rating: 4.3,
    votes: 2851,
    reviews: 1775
  },
  {
    name: "China Dragon The Hongniu",
    categories: ["Chinese", "Fast Food"],
    costOne: 150,
    paymentMethods: "Accepts cash & online payment",
    rating: 3.9,
    votes: 93,
    reviews: 55
  },
  {
    name: "Chili's Grill & Bar",
    categories: ["Italian", "Finger Food"],
    costOne: 500,
    paymentMethods: "Accepts cash & online payment",
    rating: 4.8,
    votes: 195,
    reviews: 160
  },
  {
    name: "The Curry House",
    categories: ["North Indian", "Chinese"],
    costOne: 250,
    paymentMethods: "Accepts cash & online payment",
    rating: 3.3,
    votes: 169,
    reviews: 146
  },
  {
    name: "Vapour Bar Exchange",
    categories: ["Finger Food", "Chinese", "Italian", "European"],
    costOne: 650,
    paymentMethods: "Accepts cash & online payment",
    rating: 2.1,
    votes: 958,
    reviews: 744
  },
  {
    name: "Savage Burgers",
    categories: ["Burger", "Fast Food", "Sandwich", "Ice Cream"],
    costOne: 200,
    paymentMethods: "Accepts cash & online payment",
    rating: 1.5,
    votes: 246,
    reviews: 203
  },
  {
    name: "Cook Up A Storm",
    categories: ["Asian", "Thai"],
    costOne: 350,
    paymentMethods: "Accepts cash & online payment",
    rating: 3.0,
    votes: 126,
    reviews: 106
  },
  {
    name: "Momo King",
    categories: ["Momos", "Chinese"],
    costOne: 200,
    paymentMethods: "Accepts cash & online payment",
    rating: 1.1,
    votes: 276,
    reviews: 176
  },
  {
    name: "Qwinny's",
    categories: ["Asian", "Thai", "Poke", "Rolls", "Chinese"],
    costOne: 400,
    paymentMethods: "Accepts cash & online payment",
    rating: 2.7,
    votes: 840,
    reviews: 639
  }];

ReactDOM.render(<App data = {data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
