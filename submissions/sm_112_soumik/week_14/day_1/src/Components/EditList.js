import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editCar } from "../Redux/action";
import { Redirect } from "react-router-dom";

class EditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelNo: "",
      modelName: "",
      manu: "",
      milage: "",
      price: "",
      count: ""
    };
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.editCar(this.state);
    alert("Updated Succesfully");
    console.log(this.state);
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    let userData = this.props.carList;
    const editUser = userData.find(item => item.modelName == id);
    this.setState(editUser);
  }
  render() {
    return (
      <div className="text-center">
        <h2>Welcome Back User</h2>
        <div className="d-flex justify-content-center ">
          <div className="col-12 col-md-5 border border-danger rounded p-4">
            <label>Model No</label>
            <input
              className="form-control my-2 text-muted bg-dark"
              placeholder="model_no"
              type="number"
              value={this.state.modelNo}
              disabled
              onChange={e => this.setState({ modelNo: e.target.value })}
            />
            <label>Model Name</label>
            <input
              className="form-control my-2"
              placeholder="model_name"
              type="text"
              onChange={e => this.setState({ modelName: e.target.value })}
              value={this.state.modelName}
            />
            <label>manunfacturer</label>
            <input
              className="form-control my-2"
              placeholder="manunfacturer"
              value={this.state.manu}
              onChange={e => this.setState({ manu: e.target.value })}
            />
            <label>Milage</label>
            <input
              className="form-control my-2"
              placeholder="milage"
              type="number"
              onChange={e => this.setState({ milage: e.target.value })}
              value={this.state.milage}
            />
            <label>Price</label>
            <input
              className="form-control my-2"
              placeholder="Price"
              type="number"
              onChange={e => this.setState({ price: e.target.value })}
              value={this.state.price}
            />
            <lable>Enter No of Vehicles</lable>
            <select
              className="form-control"
              onChange={e => this.setState({ count: e.target.value })}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <button
              className="btn btn-danger mt-2"
              onClick={this.submitHandler}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carList: state.user.carList
});

const mapDispatchToProps = dispatch => ({
  editCar: item => dispatch(editCar(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditList);
