import categoryData from "./Data";
import React, { Component } from "react";
import ItemCard from "./itemCard";

class ItemsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }
  componentDidMount() {
    let catList =
      categoryData[this.props.match.params.subcat][
        this.props.match.params.items
      ];

    let items = catList.find(ele => {
      return ele.id == this.props.match.params.id;
    });
    this.setState({
      item: items
    });
  }
  render() {
    let { name, id, desc, rating, img, price } = this.state.item;
    return (
      <div className="card p-5">
        <div className="row p-5 d-flex justify-content-center">
          <ItemCard
            name={name}
            key={id}
            desc={desc}
            img={img}
            price={price}
            rating={rating}
          />
        </div>
      </div>
    );
  }
}

export default ItemsInfo;
