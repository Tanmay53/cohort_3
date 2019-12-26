import React from "react";

const Card = props => {
  const style = {
    width: "18rem"
  };
  const {
    name,
    cardPayment,
    votes,
    reviews,
    costForOne,
    catagories,
    rating
  } = props.lable;
  return (
    <div className="card m-4 bg-info text-light" style={style}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 ">
          Catagories:
          {catagories.map(ele => (
            <span className="m-1">{ele}</span>
          ))}
        </h6>
        <p className="card-text">Votes:{votes}</p>
        <p className="card-text">reviews:{reviews}</p>
        <p className="card-text">Cost For One :{costForOne}</p>
        <p className="card-text">Rating:{rating}</p>
        <p className="card-text">
          Payment:
          {cardPayment.map(ele => (
            <span className="m-1">{ele}</span>
          ))}
        </p>
      </div>
    </div>
  );
};
export default Card;
