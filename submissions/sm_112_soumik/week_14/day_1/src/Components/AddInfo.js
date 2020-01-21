import React, { useState } from "react";
import { connect } from "react-redux";
import { addCar } from "../Redux/action";
import { Redirect } from "react-router-dom";
function AddInfo(props) {
  const [modelNo, setModelNo] = useState("");
  const [modelName, setModelName] = useState("");
  const [manu, setManu] = useState("");
  const [milage, setMilage] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");

  console.log(props.auth);

  const handleSubmit = e => {
    let obj = {
      modelNo,
      modelName,
      manu,
      milage,
      price,
      count
    };
    setModelNo("");
    setCount("");
    setManu("");
    setMilage("");
    setModelName("");
    setPrice("");
    props.addCar(obj);
    console.log(props.car);
  };
  if (props.auth) {
    return (
      <div className="text-center">
        <h2>Add A New Vehicle</h2>
        <div className="d-flex justify-content-center ">
          <div className="col-12 col-md-5 border border-danger rounded p-4">
            <label>Model No</label>
            <input
              className="form-control my-2"
              placeholder="model_no"
              type="text"
              onChange={e => setModelNo(e.target.value)}
              value={modelNo}
            />
            <label>Model Name</label>
            <input
              className="form-control my-2"
              placeholder="model_name"
              type="text"
              value={modelName}
              onChange={e => setModelName(e.target.value)}
            />
            <label>Manufacturer</label>
            <input
              className="form-control my-2"
              placeholder="manunfacturer"
              onChange={e => setManu(e.target.value)}
              value={manu}
            />
            <label>Milage</label>
            <input
              className="form-control my-2"
              placeholder="milage"
              type="number"
              value={milage}
              onChange={e => setMilage(e.target.value)}
            />
            <label>Price</label>
            <input
              className="form-control my-2"
              placeholder="Price"
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
            <label>No of Vehicles</label>
            <select
              className="form-control"
              value={count}
              onChange={e => setCount(e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <button className="btn btn-danger mt-2" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}
const mapStateToProps = state => ({
  car: state.user.carList,
  auth: state.auth.isAuth
});

const mapDisptachToProps = dispatch => ({
  addCar: car => dispatch(addCar(car))
});

export default connect(mapStateToProps, mapDisptachToProps)(AddInfo);
