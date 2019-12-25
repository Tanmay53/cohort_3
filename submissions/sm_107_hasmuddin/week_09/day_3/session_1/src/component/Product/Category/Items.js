import categoryData from "./Data";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let catList =
      categoryData[this.props.match.params.subcat][
        this.props.match.params.items
      ];
    this.setState({
      data: catList
    });
  }
  render() {
    console.log(this.state);
    console.log(this.props.match);
    return (
      <div className="card p-5">
        <div className="row p-5 d-flex justify-content-center">
          <table className="table col-5 text-center">
            {this.state.data.map(ele => {
              return (
                <Card
                  name={ele.name}
                  img={ele.img}
                  more="true"
                  path={`${this.props.match.url}`}
                  id={ele.id}
                  priceCondition="true"
                  price={ele.price}
                />
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default Items;
