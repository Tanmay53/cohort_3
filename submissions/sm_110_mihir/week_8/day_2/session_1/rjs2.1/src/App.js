import React from "react";
import "./App.css";
import Restaurant from "./components/restaurant";

const data = {
    name: "URU Brewpark",
    categories: ["Continental", "Pizza", "Asian", "Desserts"],
    cost: "₹ 600 for one",
    payment: "Accepts online payents only",
    rating: 4.3,
    votes: 766,
    reviews: 512
};

// populate array of data
let arrData = [];
for (let i = 0; i < 10; i++) arrData.push(data);

// create ele for each card
const listItems = arrData.map(ele => <Restaurant {...ele} />);
function App() {
    return <div className="App">{listItems}</div>;
}

export default App;
