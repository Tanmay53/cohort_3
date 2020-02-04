import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Table from "./Table";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      page_no: 1,
      item_to_show: 10,
      total_pages: 0
    };
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.item_to_show != prevState.item_to_show) {
      this.fetch();
    }
  }
  fetch = async () => {
    let config = {
      method: "GET",
      baseURL: "http://localhost:5000",
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        page: this.state.page_no,
        per_page: this.state.item_to_show
      }
    };

    let items = await axios.get("/users/listing", config);
    let total_pages = items.data.pages;
    items = items.data.items;
    this.setState({ items, total_pages });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, page_no: 1 });
  };

  changePage = e => {
    this.setState({ page_no: parseInt(e.target.value) }, () => {
      this.fetch();
      this.forceUpdate();
    });
  };
  render() {
    const { items, page_no, item_to_show, total_pages } = this.state;
    let pagination = [];
    for (let i = 1; i <= total_pages; i++) {
      pagination.push(
        <li key={i} className="page-item">
          <button value={i} className="page-link" onClick={this.changePage}>
            {i}
          </button>
        </li>
      );
    }
    return (
      <div className="col">
        <div className="row px-5 pt-4">
          <div className="col-4">
            <div className="form-group">
              <label className="float-left">Items per page</label>
              <select
                className="form-control"
                name="item_to_show"
                onChange={this.handleChange}
                value={item_to_show}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
        <Table items={items}></Table>
        <div className="d-flex justify-content-center w-100">
          <div>
            <nav
              aria-label="Page navigation example"
              className="justify-content-center"
            >
              <ul className="pagination">{pagination}</ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
