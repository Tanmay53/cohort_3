/** @format */

import React, { Component } from "react";
import Card from "./cards.js";
class RestaurantDetails extends Component {
  

  render() {
    return (
      <div className="d-flex flex-row flex-wrap ">
        {this.props.ele.map(x => {
          return <Card votes = {x.totalVotes} 
          url = {x.url} title = {x.itemName} 
          reviews = {x.totalReviews} 
          ratings = {x.ratings} 
          payment = {x.paymentType} 
          cost = {x.costForOne} 
          category ={x.categories}
          />;
        })}
      </div>
    );
  }
}

export default RestaurantDetails;
