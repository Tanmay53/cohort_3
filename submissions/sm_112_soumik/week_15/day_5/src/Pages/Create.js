import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    axios
      .post("http://localhost:5000/user", {
        name,
        email,
        mobile,
        age
      })
      .then(res => console.log(res));
    alert("User Added Succesfully");
    setAge("");
    setEmail("");
    setMobile("");
    setName("");
    setClick(true);
  };
  if (click) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <h2 className="text-danger mb-4">ADD New User</h2>
        <div className="m-auto col-md-5 p-4 border border-danger rounded">
          <label>Name</label>
          <input
            placeholder="Enter Your Name"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            placeholder="Enter Your Email"
            value={email}
            className="form-control"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label>Mobile</label>
          <input
            placeholder="Enter Mobile Number"
            className="form-control"
            value={mobile}
            type="number"
            onChange={e => setMobile(e.target.value)}
          />
          <label>Name</label>
          <select
            className="form-control"
            value={age}
            onChange={e => setAge(e.target.value)}
          >
            <option></option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
          </select>
          <button className="btn btn-info mt-4" onClick={clickHandler}>
            Add Indo
          </button>
        </div>
      </div>
    );
  }
}

export default Create;
