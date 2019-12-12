import React from "react";
import "./App.css";
import Display from "./components/restaurant";
// import { func } from "prop-types";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "URU Brewpark",
                    categories: ["Continental", "Pizza", "Asian", "Desserts"],
                    cost: "₹600 for one",
                    payment: "Accepts online payents only",
                    rating: 4.3,
                    votes: 766,
                    reviews: 512
                },
                {
                    name: "Dal Bati",
                    categories: [
                        "Indian",
                        "Lentil",
                        "Asian",
                        "Main Course Veg"
                    ],
                    cost: "₹200 for one",
                    payment: "Accepts online payents only",
                    rating: 3.2,
                    votes: 766,
                    reviews: 512
                },
                {
                    name: "Butter Chicken",
                    categories: [
                        "Indian",
                        "Curry",
                        "Asian",
                        "Main Course Non-Veg"
                    ],
                    cost: "₹250 for one",
                    payment: "Accepts online payents only",
                    rating: 4.8,
                    votes: 766,
                    reviews: 512
                },
                {
                    name: "Chicken Tikka",
                    categories: [
                        "Indian",
                        "Curry",
                        "Asian",
                        "Main Course Non-Veg"
                    ],
                    cost: "₹250 for one",
                    payment: "Accepts online payents only",
                    rating: 2.5,
                    votes: 766,
                    reviews: 512
                },
                {
                    name: "Idly vada sambhar",
                    categories: ["Indian", "Lentil", "Asian", "Breakfast Veg"],
                    cost: "₹50 for one",
                    payment: "Accepts online payents only",
                    rating: 4,
                    votes: 766,
                    reviews: 512
                },
                {
                    name: "Andhra Meals",
                    categories: ["Indian", "Lentil", "Asian", "Meals Veg"],
                    cost: "₹250 for one",
                    payment: "Accepts online payents only",
                    rating: 3.8,
                    votes: 766,
                    reviews: 512
                },
                {
                    name: "Chicken Biryani",
                    categories: [
                        "Indian",
                        "Rice",
                        "Asian",
                        "Main Course Non-Veg"
                    ],
                    cost: "₹250 for one",
                    payment: "Accepts online payents only",
                    rating: 3.5,
                    votes: 766,
                    reviews: 512
                },
                {
                    name: "Mutton Tundai Kabab",
                    categories: [
                        "Indian",
                        "Mughlai",
                        "Asian",
                        "Main Course Non-Veg"
                    ],
                    cost: "₹80 for one",
                    payment: "Accepts online payents only",
                    rating: 4.9,
                    votes: 766,
                    reviews: 512
                },
                {
                    name: "Phirni",
                    categories: ["Indian", "Mughali", "Asian", "Desert"],
                    cost: "₹250 for one",
                    payment: "Accepts online payents only",
                    rating: 2.8,
                    votes: 766,
                    reviews: 512
                },
                {
                    name: "Roshogolla",
                    categories: ["Indian", "Bengali", "Asian", "Desert"],
                    cost: "₹20 for one",
                    payment: "Accepts online payents only",
                    rating: 1.8,
                    votes: 766,
                    reviews: 512
                }
            ],
            show: 5
        };
        // // create ele for each card
        // this.listItems = this.state.data.map(ele => (
        //     <Restaurant key={ele.name} data={ele} />
        // ));
    }
    // function to sort
    sortData = () => {
        // let sortedData = this.state.data.sort(function(a, b) {
        //     return b.rating - a.rating;
        // });
        this.setState(state => {
            return {
                data: this.state.data.sort(function(a, b) {
                    return b.rating - a.rating;
                })
            };
        });
    };

    Filter = val => {
        this.setState(state => {
            return { show: val };
        });
    };

    render() {
        return (
            <div>
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={this.sortData}>
                        Sort by Ratings
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            this.Filter(1);
                        }}
                    >
                        1
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            this.Filter(2);
                        }}
                    >
                        2
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            this.Filter(3);
                        }}
                    >
                        3
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            this.Filter(4);
                        }}
                    >
                        4
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            this.Filter(5);
                        }}
                    >
                        All
                    </button>
                </div>
                <div className="App">
                    <Display data={this.state.data} show={this.state.show} />
                </div>
            </div>
        );
    }
}

export default App;
