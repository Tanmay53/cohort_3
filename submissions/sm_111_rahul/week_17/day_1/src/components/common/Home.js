/** @format */
import React, { Component } from "react";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    console.log(this.props.data);

    return (
      <div className="container bg-light text-dark">
        <div className="form-group">
          <label>Search for Available meeting rooms</label>
          <input type="text" className="form-control my-3"></input>
          <button
            type="button"
            className="btn btn-primary"
            onSubmit={this.handleSubmit}
          >
            Search
          </button>
        </div>
        <div className="row justify-content-center">
          {this.props.data.map(ele => {
            return (
              <div
                key={ele.id}
                className="card my-3 bg-light sm-col-12 md-col-5 lg-col-4"
              >
                <img
                  src="https://via.placeholder.com/150/000000"
                  alt="room"
                  style={{ height: "200px" }}
                  className="card-img-top p-2"
                />
                <div className="card-body">
                  <h4 className="card-title text-danger">
                    Name - {ele.roomName}
                  </h4>
                  <h4 className="text-danger">
                    Room's Capacity - {ele.capacity}
                  </h4>
                  {ele.isBooked ? (
                    <h4 className="text-danger">Status - Not Available</h4>
                  ) : (
                    <h4 className="text-danger"> Status - Available</h4>
                  )}
                  <h4 className="text-danger">Floor - {ele.floor}</h4>
                  <h4 className="text-danger">Price - Rs {ele.pricePerDay}</h4>
                </div>
                <button className="btn btn-primary mx-3">Book Slot</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, null)(Home);
