import React from "react";
const Product = props => {
  const id = props.match.params.id;
  const data = props.data.find(item => {
    return item.id === id;
  });
  if (data) {
    return (
      <div className="col-md-4 offset-3 border rounded">
        <div className="card-body text-center">
          <h2 className="text-title h1">Product Name: {data.item_name}</h2>
          <img src={data.img} className="card-img-top" />
          <p className="card-text lead">Brand: {data.Brand}</p>
          <p className="card-text lead">{data.price}</p>
          <small className="card-text">{data.color}</small>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <h2>No data found</h2>
      </React.Fragment>
    );
  }
};
export default Product;
