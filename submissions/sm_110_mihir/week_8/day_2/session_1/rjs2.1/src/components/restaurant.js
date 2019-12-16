import React from "react";

function Restaurant(data) {
    const { name, categories, cost, payment, rating, votes, reviews } = data;
    console.log(name);
    const list = categories.map(ele => <span key={ele}>{ele} ,</span>);
    return (
        <div className="card container m-2">
            <div className="row p-2">
                <div className="col-3">
                    <img
                        src="https://via.placeholder.com/150"
                        className="img-fluid"
                    />
                </div>
                <div className="col-6">
                    <h3 className="text-warning">{name}</h3>
                    <p className="text-muted m-0">{list}</p>
                    <p className="muted  m-0">{cost}</p>
                    <p className="m-0">
                        Min ₹50 <strong>*</strong> Up to 30 min
                    </p>
                    <p>{payment}</p>
                </div>
                <div className="col-2" style={{ textAlign: "right" }}>
                    <h3>
                        <span className="badge badge-success">{rating}</span>
                    </h3>
                    <p className="text-muted m-0">{votes} votes</p>
                    <p className="text-muted m-0">{reviews} reviews</p>
                </div>
            </div>
            <div class="card-footer text-muted text-right">Order Online ></div>
        </div>
    );
}

export default Restaurant;
