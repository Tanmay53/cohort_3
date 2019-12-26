import React from "react";

export default function Products(props) {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <img src={props.img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="row">
                            <h2>{props.name}</h2>
                        </div>
                        <div className="row">
                            <p className="lead">${props.price}</p>
                        </div>
                        <div className="row">
                            <h3>Description</h3>
                            <p>{props.description}</p>
                        </div>
                        <button className="btn btn-primary btn-block">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
