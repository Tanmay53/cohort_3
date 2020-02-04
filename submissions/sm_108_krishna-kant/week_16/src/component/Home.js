import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Table from "./Table";
import { Route, Switch } from "react-router-dom";
import List from "./List";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      page_no: 1,
      item_to_show: 25,
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
    const { search } = this.props.location;
    if (search != "") {
      let query = new URLSearchParams(search);
      let page_no = query.get("page");
      let item_to_show = query.get("per_page");
      this.setState({ page_no, item_to_show });
    }

    let config = {
      method: "GET",
      baseURL: "http://localhost:5000",
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
    this.setState({ [e.target.name]: e.target.value, page_no: 1 }, () => {
      this.props.history.push(
        `/users/listing/?page=${this.state.page_no}&per_page=${this.state.item_to_show}`
      );
    });
  };

  changePage = page_no => {
    this.setState({ page_no }, () => {
      this.fetch();
      this.forceUpdate();
    });
  };
  render() {
    const { items, page_no, item_to_show, total_pages } = this.state;
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route
            path={`${match.path}/listing`}
            render={props => (
              <List
                total_pages={total_pages}
                item_to_show={item_to_show}
                items={items}
                handleChange={this.handleChange}
                changePage={this.changePage}
                {...props}
              ></List>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}
