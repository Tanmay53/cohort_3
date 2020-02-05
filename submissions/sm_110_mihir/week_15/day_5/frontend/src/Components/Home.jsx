import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      perPage: 10,
      totalPages: 0,
      page: 1
    };
  }
  handleChange = e => {
    this.setState({
      perPage: Number(e.target.value)
    });
    this.url = "http://localhost:5000/users/listing?per_page=" + e.target.value;
    this.fetchData(this.url);
  };

  fetchData = async url => {
    let response = await axios.get(url);
    console.log(response);
    this.setState({
      data: response.data.items,
      totalPages: response.data.total_pages
    });
  };

  extractParams = () => {
    this.params = new URLSearchParams(this.props.location.search);
    if (this.params !== "")
      this.setState({
        page: this.params.get("page"),
        perPage: this.params.get("per_page")
      });
  };
  handleClick(page) {
    this.url =
      "http://localhost:5000/users/listing?page=" +
      page +
      "&per_page=" +
      this.state.perPage;
    this.fetchData(this.url);
    this.setState({
      page: page
    });
    console.log("data length:", this.state.data.length);
  }
  componentDidMount() {
    this.extractParams();
    this.url =
      "http://localhost:5000/users/listing?page=" +
      this.state.page +
      "&per_page=" +
      this.state.perPage;
    this.fetchData(this.url);
    console.log("data length:", this.state.data.length);
  }
  render() {
    this.ele = [];
    for (let i = 1; i <= this.state.totalPages; i++)
      this.ele.push(
        <li
          className={i === this.state.page ? "page-item active" : "page-item"}
        >
          <Link
            to={
              // "http://localhost:5000" +
              this.props.match.url +
              "?page=" +
              i +
              "&per_page=" +
              this.state.perPage
            }
            className="page-link"
            onClick={() => this.handleClick(i)}
          >
            {i}
          </Link>
        </li>
      );

    return (
      <div>
        <button className="btn btn-outline-primary">
          <Link to="/users/create">Add new User</Link>
        </button>

        <form className="form-group m-auto w-25">
          <label htmlFor="perPage">Items per page</label>
          <select
            name="perPage"
            className="form-control "
            onChange={this.handleChange}
          >
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </form>
        <ul className="pagination col-6">
          <li className="list-item">Pages </li>
          {this.ele.map(a => a)}
        </ul>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(ele => (
              <tr>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>
                  <Link to={`/users/update/${ele.id}`}>
                    <i className="fas fa-user-edit"></i>
                  </Link>
                </td>
                <td>
                  <Link to={`/users/delete/${ele.id}`}>
                    <i className="fas fa-trash-alt"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
