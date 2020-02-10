import React, { Component } from "react";
import { connect } from "react-redux";

class Orders extends Component {
  render() {
    console.log(this.props.totalPrice);
    return (
      <div className="container mt-5">
        <div className="d-flex flex-wrap">
          {this.props.roomList.map(val => {
            if (val.isBooked) {
              return (
                <div
                  key={val.id}
                  className="card mb-3 mx-2"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Room Booked</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      order no: #{Date.now()}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Floor: {val.floor}
                    </h6>
                    <p className="card-text">Meeting Name: {val.room_name}</p>
                    <p className="card-text">Capacity: {val.capacity}</p>
                    <p className="card-text">
                      Pay Amount: {this.props.totalPrice}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  roomList: state.roomList,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
