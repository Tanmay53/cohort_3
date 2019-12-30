import React, { Component } from "react";
import { connect } from "react-redux";
import addData from "../redux/Action";

class AddCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      year: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.props.state);
    console.log(this.props.addData);
    return (
      <div className="d-flex justify-content-center">
        <div>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            className="form-control m-4"
            placeholder="Name"
          />
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            className="form-control m-4"
            placeholder="Email"
          />
          <input
            type="text"
            onChange={this.handleChange}
            name="mobile"
            className="form-control m-4"
            placeholder="Phone Number"
          />
          <input
            type="text"
            onChange={this.handleChange}
            name="year"
            className="form-control m-4"
            placeholder="Sales year"
          />
          <input
            type="button"
            onClick={() => this.props.addData(this.state)}
            className="btn btn-dark m-4"
            value="Add Customer"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addData: cus => dispatch(addData(cus))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCustomers);
