import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
      globalPerson: [],
      localStorage: [],
      select: "",
      people: {
        name: "",
        age: "",
        dept: "",
        address: "",
        salary: ""
      }
    };
  }

  selectHandler = e => {
    this.setState({ select: e.target.value });
  };

  changeHandler = e => {
    let obj = { ...this.state.people, [e.target.name]: e.target.value };
    this.setState({ people: obj });
  };

  submitForm = e => {
    let list = [...this.state.person, { ...this.state.people }];
    this.setState({});
    this.setState({});
    e.preventDefault();
    localStorage.setItem("person", JSON.stringify(list));
  };

  componentDidMount() {
    let data = localStorage.getItem("person");
    data = JSON.parse(data);
    if (data !== null) {
      this.setState({ localStorage: [...data], data });
    } else {
      this.setState({ localStorage: this.state.person });
    }
    console.log(data);
  }

  render() {
    console.log(this.state.select);
    return (
      <div>
        <div className="row text-center">
          <div className="col-md-4 offset-1">
            <h2>Enter Personal Details</h2>
            <form onSubmit={this.submitForm} className="form-group">
              <div>
                <label>
                  Name
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                </label>
              </div>
              <div>
                <label>
                  Age
                  <input
                    className="form-control"
                    type="number"
                    name="age"
                    value={this.state.age}
                    onChange={this.changeHandler}
                  />
                </label>
              </div>
              <div>
                <label>
                  Address
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    value={this.state.address}
                    onChange={this.changeHandler}
                  />
                </label>
              </div>
              <div>
                <label>
                  Department
                  <input
                    className="form-control"
                    type="text"
                    name="dept"
                    value={this.state.dept}
                    onChange={this.changeHandler}
                  />
                </label>
              </div>
              <div>
                <label>
                  Salary
                  <input
                    className="form-control"
                    type="number"
                    name="salary"
                    value={this.state.salary}
                    onChange={this.changeHandler}
                  />
                </label>
              </div>
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Show Details</h3>
            <div className="row">
              <div className="col-md-3">
                <select
                  className="form-control d-inline"
                  onChange={this.selectHandler}
                  value={this.state.select}
                  name="select"
                >
                  <option disabled>Department</option>
                  <option>Human Resource</option>
                  <option>Management</option>
                  <option>Technical</option>
                  <option>Software</option>
                  <option>Sales</option>
                </select>
              </div>
              <div className="col-md-3 offset-3">
                <select className="form-control">
                  <option disabled>Sort</option>
                  <option>Ascending</option>
                  <option>Descending</option>
                </select>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Address</th>
                  <th scope="col">Department</th>
                  <th scope="col">Salary</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.person.length
                  ? this.state.person.map((item, idx) => {
                      return (
                        <tr>
                          <td>{idx + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>{item.address}</td>
                          <td>{item.dept}</td>
                          <td>{item.salary}</td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      );
                    })
                  : this.state.localStorage.map((item, idx) => {
                      return (
                        <tr>
                          <td>{idx + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>{item.address}</td>
                          <td>{item.dept}</td>
                          <td>{item.salary}</td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
