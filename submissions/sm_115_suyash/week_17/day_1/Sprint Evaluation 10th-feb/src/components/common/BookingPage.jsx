import React, { Component } from "react";
import { connect } from "react-redux";
import { bookRoom } from "../../redux/action";

class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 0,
      endDate: 0,
      totalPrice: 0,
      price: 0
    };
  }

  componentDidMount = () => {
    this.props.roomList.map(val => {
      if (val.id == this.props.match.params.id) {
        console.log(val.pricePerDay);
        this.setState({
          price: val.pricePerDay
        });
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        endDate: e.target.value
      },
      () => {
        let num = Number(this.state.endDate) - Number(this.state.startDate);
        if (num > 0) {
          this.setState({
            totalPrice: this.state.price * num
          });
        }
      }
    );
  };
  handleChange2 = e => {
    this.setState(
      {
        startDate: e.target.value
      },
      () => {
        let num = Number(this.state.endDate) - Number(this.state.startDate);
        if (num > 0) {
          this.setState({
            totalPrice: this.state.price * num
          });
        }
      }
    );
  };

  handleClick = id => {
    if (this.state.totalPrice > 0) {
      this.props.bookRoom(id, this.state.totalPrice);
    } else {
      alert("Select your date");
    }
  };

  render() {
    return (
      <div>
        {this.props.roomList.map(val => {
          if (val.id == this.props.match.params.id) {
            return (
              <div>
                <div>
                  <label className="mr-2 mt-3" htmlFor="Name">
                    Enter start Date:{" "}
                  </label>
                  <input
                    type="number"
                    value={this.state.startDate}
                    name="startDate"
                    onChange={e => this.handleChange2(e)}
                    placeholder="Enter start date"
                  />
                </div>
                <div>
                  <label className="mr-2 mt-3" htmlFor="Name">
                    Enter end Date:{" "}
                  </label>
                  <input
                    type="number"
                    value={this.state.endDate}
                    name="endDate"
                    onChange={e => this.handleChange(e)}
                    placeholder="Enter end date"
                  />
                </div>
                <div
                  key={val.id}
                  className="card mb-3 mx-2"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Meeting Room Info</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Floor: {val.floor}
                    </h6>
                    <p className="card-text">Room Name: {val.room_name}</p>
                    <p className="card-text">Capacity: {val.capacity}</p>
                    <p className="card-text">
                      Price: {this.state.totalPrice} Rs
                    </p>
                    <button
                      to=""
                      onClick={() => this.handleClick(val.id)}
                      className="card-link"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  roomList: state.roomList
});

const mapDispatchToProps = {
  bookRoom: (payload, totalPrice) => bookRoom(payload, totalPrice)
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
