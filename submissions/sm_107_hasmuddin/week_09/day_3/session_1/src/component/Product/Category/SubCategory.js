import categoryData from "./Data";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let catList = [];
    for (let list in categoryData[this.props.match.params.subcat]) {
      catList.push(list);
    }
    this.setState({
      data: catList
    });
  }
  render() {
    console.log(this.state);
    console.log(this.props.match);
    return (
      <div className="card p-5">
        <div className="row">
          {this.state.data.map((ele, index) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              key={index}
              to={`${this.props.match.url}/${ele}`}
            >
              <div className="mx-4 border bg-dark p-5 border shadow">
                <h2 className="text-center">{ele}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default SubCategory;
