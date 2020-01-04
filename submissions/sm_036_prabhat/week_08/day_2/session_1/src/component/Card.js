import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="card" style={{ width: "600px" }}>
                    <div className="row p-4">
                        <div className="col-3">
                            <img className="card-img" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-9">
                                    <h5 className ="card-title text-danger">{this.props.data.RestaurantName}</h5>
                                    <div className="text-muted">{this.props.data.dishes}</div>
                                    <div className="text-muted">Cost ₹{this.props.data.cost}</div>
                                    <div className="">Min ₹{this.props.data.min} • Up to {this.props.data.del_time}</div>
                                    <div className="">{this.props.data.accept}</div>
                                </div>
                                <div className="col-3">
                                    <p className="bg bg bg-success ml-3 p-1 text-center text-white"><strong>{this.props.data.star}</strong></p>
                                    <div className="text-right">
                                        <small className="text-muted ">{this.props.data.votes} votes</small>
                                        <br></br>
                                        <small className="text-muted">{this.props.data.reviews} reviews</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="row px-3">
                        <div className="col-8">
                            <input className="form-control"></input>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-success "> Order Online></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card ;