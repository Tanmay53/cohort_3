import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Table from "./Components/Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      name: "",
      data: []
    };
  }

  showData = () => {
    // this.setState({ user: this.state.name });
    const data = [];
    axios({
      method: "get",
      baseURL: " https://api.github.com/search/repositories?q=",
      url: this.state.name
    })
      .then(res => {
        let data = res.data.items;
        this.setState({ data });
      })
      .catch(err => console.log(err.message));
  };
  handleChange = e => this.setState({ name: e.target.value });

  render() {
    return (
      <div>
        <h1 className="text-center">Show Repos</h1>
        <div className="col-md-4 offset-4 text-center">
          <input
            onChange={this.handleChange}
            className="form-control"
            value={this.state.name}
          />
          <button className="btn btn-outline-info my-2" onClick={this.showData}>
            Show Data
          </button>
        </div>
        <div>
          {this.state.data.length ? (
            <Table
              info={this.state.data.map(item => {
                return item;
              })}
            />
          ) : (
            <h2></h2>
          )}
        </div>
      </div>
    );
  }
}

export default App;
