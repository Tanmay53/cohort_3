/** @format */

import React, { Component } from "react";
import axios from "axios";


export class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      email: "",
      age: "",
      mobile: "",
      status:"",
      message:"deleted successfully",
    };
  }
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  submit = e => {
    e.preventDefault();
    let newUser = {
      Name: this.state.Name,
      email: this.state.email,
      mobile: this.state.mobile,
      age: this.state.age
    };

    axios
      .post("http://localhost:5000/users/create", newUser)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-4 bg-warning p-5 m-4">
            <div className="form-group">
              <label htmlFor="Name" className="h3">
                Enter Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="Name"
                id="Name"
                value={this.state.Name}
                onChange={e => this.handleChange(e.target.name, e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="h3">
                Enter email:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                email="email"
                id="email"
                value={this.state.email}
                onChange={e =>
                  this.handleChange(e.target.email, e.target.value)
                }
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="mobile" className="h3">
                Enter mobile number:
              </label>
              <input
                type="text"
                className="form-control"
                classmobile="form-control"
                classmobile="form-control"
                placeholder="Enter mobile"
                mobile="mobile"
                id="mobile"
                value={this.state.mobile}
                onChange={e =>
                  this.handleChange(e.target.mobile, e.target.value)
                }
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="age" className="h3">
                Select Age
              </label>
              <select
                className="form-control"
                name="age"
                id="age"
                value={this.state.age}
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              >
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </div>
            <button
              className="btn btn-dark"
              type="button"
              onClick={e => this.submit(e)}
            >
              Create User
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;
