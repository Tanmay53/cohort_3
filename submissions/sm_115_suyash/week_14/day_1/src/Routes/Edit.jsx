import React, { Component } from "react";
import { connect } from "react-redux";
import { updateVehicle } from "../redux/action";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model_no: "",
      model_name: "",
      manufacturer: "",
      mileage: "",
      price: "",
      qty: "",
      id: Date.now()
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    // console.log(
    //   "start ----------- updating",
    //   this.state,
    //   this.props.match.params.id
    // );
    this.props.updateVehicle(this.state, this.props.match.params.id);
    this.setState({
      model_no: "",
      model_name: "",
      manufacturer: "",
      mileage: "",
      price: "",
      qty: ""
    });
  };

  componentDidMount = () => {
    // console.log("Edit call");
    let id = this.props.match.params.id;
    let data = this.props.vehicleList.find((item, i) => {
      console.log(id + "------------" + i);
      if (id == i) {
        return item;
      }
    });
    this.setState({
      model_no: data.model_no,
      model_name: data.model_name,
      manufacturer: data.manufacturer,
      mileage: data.mileage,
      price: data.price,
      qty: data.qty,
      id: data.id
    });
  };
  render() {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h1 className="py-5 mt-3">Update Vehical Details</h1>
        <div>
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
    );
  }
}
const mapStateToProps = state => ({
  vehicleList: state.vehicleList
});

const mapDispatchToProps = dispatch => ({
  updateVehicle: (payload, id) => dispatch(updateVehicle(payload, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
