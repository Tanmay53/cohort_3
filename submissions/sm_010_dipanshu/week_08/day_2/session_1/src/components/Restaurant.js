import React from "react";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);

    this.name = props.restaurant.name;
    this.categories = props.restaurant.categories;
    this.cost = props.restaurant.cost;
    this.minCost = props.restaurant.minCost;
    this.minTime = props.restaurant.minTime;
    this.payment = props.restaurant.payment;
    this.rating = props.restaurant.rating;
    this.votes = props.restaurant.votes;
    this.reviews = props.restaurant.reviews;

    // console.log(
    //   this.name,
    //   this.categories,
    //   this.cost,
    //   this.minCost,
    //   this.minTime,
    //   this.payment,
    //   this.rating,
    //   this.votes,
    //   this.reviews
    // );
  }

  render() {
    return (
      <div className="card col-5 p-0 mt-5 ml-5">
        <div className="d-flex justify-content-center p-2">
          <img
            src="https://via.placeholder.com/100.png/09f/fff"
            className="mr-3 rounded"
            alt="..."
            width="250"
            height="250"
          />
          <div className="mr-3 d-flex flex-column justify-content-between">
            <h3 className="font-weight-bold text-danger">{this.name}</h3>
            <p className="text-muted">{this.categories.join(", ")}</p>
            <p className="text-muted">Cost ₹{this.cost} for two</p>
            <div className="d-flex">
              <p>Min ₹{this.minCost}</p>
              <p className="ml-2">•</p>
              <p className="ml-2">Upto {this.minTime} Min</p>
            </div>
            <p>Accepts {this.payment} payment only</p>
            <div></div>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h3>
              <span className="badge badge-success"> {this.rating} </span>
            </h3>
            <p className="text-muted mb-1">{this.votes} votes</p>
            <p className="text-muted">{this.reviews} reviews</p>
          </div>
        </div>
        <div className="card-footer m-0 p-0 d-flex justify-content-end">
          <button className="btn btn-success rounded-0">
            <span className="small">Order Online ></span>
          </button>
        </div>
      </div>
    );
  }
}
export default Restaurant;
