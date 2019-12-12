import React from "react";

const RestaurantDetails = ({ list }) =>
  list.map(info => {
    return <Restaurant key={info.id} details={info} />;
  });

const Restaurant = ({ details }) => (
  <div className="col-md-6">
    <div className="card">
      <div className="card-body p-2">
        <div className="d-flex">
          <div className="col-3 px-0">
            <img
              className="card-img-top"
              src="https://www.itchotels.in/content/dam/projects/hotelswebsite/itc-hotels/luxury-collection/destination/chennai/itc-grand-chola/Website/mobile/14%20pan%20asian%20cafe.jpg"
              alt="image"
            />
          </div>
          <div className="col-7">
            <h4 className="card-title text-danger pt-2 mb-0">{details.name}</h4>
            <h6 className="text-muted mb-0">
              <small>{details.category}</small>
            </h6>
            <h6 className="text-muted">
              <small>Cost {details.cost} for one</small>
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="col-2 px-0 py-2 text-right">
            <span className="badge badge-success">{details.rating}</span>
            <br />
            <small className="text-muted">{details.votes} votes</small>
            <br />
            <small className="text-muted">{details.reviews} reviews</small>
          </div>
        </div>
      </div>
      <div className="card-footer p-2">
        <a href="#" className="btn btn-primary float-right">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
);

export default RestaurantDetails;
