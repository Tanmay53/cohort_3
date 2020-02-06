import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const Data = [
    {
        title: "Fenny's Lounge & Kitchen",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 600,
        payment: "Accepts online payment only",
        rating: 4.3,
        votes: 123,
        reviews: 221
    },
    {
        title: "The Black Pearl",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 400,
        payment: "Accepts online payment only",
        rating: 3.9,
        votes: 125,
        reviews: 555
    },
    {
        title: "The Rooftop Restaurant",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 690,
        payment: "Accepts online payment only",
        rating: 3,
        votes: 352,
        reviews: 121
    },
    {
        title: "Nagarjuna",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 620,
        payment: "Accepts online payment only",
        rating: 3.1,
        votes: 664,
        reviews: 153
    },
    {
        title: "Grills And Tandoor",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 750,
        payment: "Accepts online payment only",
        rating: 2.3,
        votes: 966,
        reviews: 674
    },
    {
        title: "Carrots Restaurant",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 2600,
        payment: "Accepts online payment only",
        rating: 1.2,
        votes: 666,
        reviews: 234
    },
    {
        title: "Lazeez",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 900,
        payment: "Accepts online payment only",
        rating: 1,
        votes: 866,
        reviews: 293
    },
    {
        title: "Truffles",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 500,
        payment: "Accepts online payment only",
        rating: 4.5,
        votes: 766,
        reviews: 435
    },
    {
        title: "Chianti",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 1600,
        payment: "Accepts online payment only",
        rating: 4.6,
        votes: 655,
        reviews: 678
    },
    {
        title: "Tunday Kababi",
        category: ["continental", "pizza", "Asian", "deserts"],
        cost: 700,
        payment: "Accepts online payment only",
        rating: 3.5,
        votes: 534,
        reviews: 112
    }];
    ReactDOM.render(<App data={Data}/>,document.getElementById("root"));
