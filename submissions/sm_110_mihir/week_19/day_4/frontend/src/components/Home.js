import React, { Component } from "react";
import { fetchData } from "../redux/action";
import { connect } from "react-redux";
import Card from "./Card";
export class Home extends Component {
  constructor(props) {
    super(props);
    const config = {
      url: "http://localhost:5000/all_books"
    };
    this.props.fetchData(config);
  }
  render() {
    return (
      <div>
        <h1 className="bg-primary text-white">Library Book Manager</h1>

        {/* all books fetched on load */}
        <div className="card-deck">
          {this.props.data.map(ele => (
            <Card
              key={ele["book_id"]}
              book_name={ele["book_name"]}
              author={ele["author"]}
              category={ele["category"]}
              publisher={ele["publisher"]}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStatetoPorps = state => {
  return {
    data: state.data
  };
};
export default connect(mapStatetoPorps, { fetchData })(Home);
