import React from "react";

export default function Feed({ title, body, created_at }) {
  return (
    <div className="col-lg-6 offset-lg-3 col-md-6 offset-lg-3 col-sm-10 offset-sm-1 my-3">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div
            className="col-md-4"
            style={{ height: "100%", overflow: "hidden" }}
          >
            <img
              src="https://source.unsplash.com/random"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body}</p>
              <p className="card-text">
                <small className="text-muted">{created_at}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
