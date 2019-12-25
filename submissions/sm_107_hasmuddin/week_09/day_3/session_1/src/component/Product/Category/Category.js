import categoryData from "./Data";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let catList = [];
    for (let list in categoryData) {
      catList.push(list);
    }
    this.setState({
      data: catList,
      img: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhhypeP2C2U0yitJVk1Yc-7VAqUjy4_N5tq96Wp_XpIRPbbqg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebTbzJUF1mTD1e9nS6F-YTItffcfCC_YdcdcoS1IwkZyYSYtM&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2Zu4FS3kgh1BPlKrboqHHMyoVZ9GcnLlfDmEakP-lsRr38r60w&s"
      ]
    });
  }
  render() {
    return (
      <div className="card p-5">
        <div className="row">
          {this.state.data.map((ele, index) => (
            <Link
              style={{ textDecoration: "none" }}
              key={index}
              to={`${this.props.match.url}/${ele}`}
            >
              <div className="mx-4 border">
                {<img src={this.state.img[index]} />}
                <h2 className="text-center">{ele}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
