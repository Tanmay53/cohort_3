import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { ADD_ACTION } from "../../Redux/Action";

class AddVehicle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modelName: "",
      vehicleType: "",
      mileage: "",
      topSpeed: "",
      cost: "",
      sales: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.modelName !== "" &&
      this.state.vehicleType !== "" &&
      this.state.sales !== ""
    ) {
      let payload = {
        ...this.state,
        mileage: Number(this.state.mileage),
        topSpeed: Number(this.state.topSpeed),
        cost: Number(this.state.cost),
        sales: Number(this.state.sales)
      };
      this.props.addVehicle(payload);
    } else {
      alert("Please enter mandatory values");
    }
    this.setState({
      modelName: "",
      vehicleType: "",
      mileage: "",
      topSpeed: "",
      cost: "",
      sales: ""
    });
  };

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="container mt-5">
          <p className="display-4">Add a new vehicle</p>
          <form className="mt-4">
            <div className="form-group">
              <label htmlFor="exampleInputName">
                Model Name<span className="small text-danger"> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="modelName"
                aria-describedby="emailHelp"
                value={this.state.modelName}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlSelect">
                Vehicle Type <span className="small text-danger"> *</span>
              </label>
              <select
                className="form-control"
                id="vehicleType"
                onChange={this.handleChange}
                value={this.state.vehicleType}
              >
                <option value="">Select</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
                <option value="suv">SUV</option>
                <option value="muv">MUV</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputMileage">Mileage</label>
              <input
                type="number"
                className="form-control"
                id="mileage"
                value={this.state.mileage}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputTopSpeed">Top Speed</label>
              <input
                type="number"
                className="form-control"
                id="topSpeed"
                value={this.state.topSpeed}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputCost">Cost</label>
              <input
                type="number"
                className="form-control"
                id="cost"
                value={this.state.cost}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputSales">
                Sales <span className="small text-danger"> *</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="sales"
                value={this.state.sales}
                onChange={this.handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
            <Link to="/dashboard">
              <button className="btn btn-primary ml-4 mt-3">Dashboard</button>
            </Link>
          </form>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    addVehicle: vehicleInfo => {
      dispatch(ADD_ACTION(vehicleInfo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);
