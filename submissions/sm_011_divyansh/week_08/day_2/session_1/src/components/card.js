
import React from 'react';
import './card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="card mt-2">
                    <div className="card-body">
                        <div className="row">
                            <div>
                                <img src="food.jpeg"></img>
                            </div>
                            <div className="col-sm">
                                <h4 className="text-danger">{this.props.details.title}</h4>
                                <p>{this.props.details.category.join(",")}</p>
                                <p>Cost Rs {this.props.details.cost} for one</p>
                                <p>Min  Rs 50 Upto 30 min</p>
                                <p>{this.props.details.payment}</p>
                            </div>
                            <div className="col-sm rating">
                                <p className="bg-success text-white rounded">{this.props.details.rating}</p>
                                <p>{this.props.details.votes} votes</p>
                                <p>{this.props.details.reviews} reviews</p>
                                <button className="btn btn-info text-green m-0 p-0">Order Online ></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;