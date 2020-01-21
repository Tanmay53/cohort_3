import React, { Component } from "react";
import { connect } from "react-redux";
import { addVehicle } from "../redux/action";
import { Redirect } from "react-router-dom";

class AddVehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model_no: "",
      model_name: "",
      manufacturer: "",
      mileage: "",
      price: "",
      qty: 1,
      id: Date.now()
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    let vehicle = {
      model_no: this.state.model_no,
      model_name: this.state.model_name,
      manufacturer: this.state.manufacturer,
      mileage: this.state.mileage,
      price: this.state.price,
      qty: this.state.qty,
      id: Date.now()
    };
    this.props.addVehicle(vehicle);
    this.setState({
      model_no: "",
      model_name: "",
      manufacturer: "",
      mileage: "",
      price: "",
      qty: 1
    });
  };

  render() {
    return this.props.isAuth ? (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h1 className="pt-5 pb-3">Fill Vehical Details</h1>
        <div className="">
          <div>Modal No.</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="text"
              value={this.state.model_no}
              onChange={e => this.handleChange(e)}
              name="model_no"
            />
          </div>
        </div>
        <div>
          <div>Modal Name</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="text"
              value={this.state.model_name}
              onChange={e => this.handleChange(e)}
              name="model_name"
            />
          </div>
          <div>Manufacturer</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="text"
              value={this.state.manufacturer}
              onChange={e => this.handleChange(e)}
              name="manufacturer"
            />
          </div>
          <div>Mileage</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="number"
              value={this.state.mileage}
              onChange={e => this.handleChange(e)}
              name="mileage"
            />
          </div>
          <div>Price</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="number"
              value={this.state.price}
              onChange={e => this.handleChange(e)}
              name="price"
            />
          </div>
          <div>Quantity</div>
          <div>
            <input
              className="px-4 py-2 my-2 rounded "
              type="number"
              value={this.state.qty}
              onChange={e => this.handleChange(e)}
              name="qty"
            />
          </div>
          <div className="ml-4 mt-4">
            <button
              className="py-2 px-5 btn btn-outline-dark"
              onClick={this.handleClick}
            >
              Add Vehicle
            </button>
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  addVehicle: payload => dispatch(addVehicle(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);
