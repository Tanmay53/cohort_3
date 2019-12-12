import React from 'react';

class RestaurantDetails extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "card m-4 col-5 shadow-lg">
                <div className = "card-body">
                    <div className = "row">
                        <div className = "col-3">
                            <img src = "/food.jpg" alt = "Food" style = {{width: "100px", height: "120px"}} className = "rounded" />
                        </div>
                        <div className = "col-6 text-left">
                            <h6 className = "text-danger mb-0">{this.props.obj.name}</h6>
                            <p className = "text-muted mb-0"><small>{this.props.obj.categories.join(', ')}</small></p>
                            <p className = "text-muted mb-0"><small>{`Cost ₹${this.props.obj.costOne} for one`}</small></p>
                            <p className = "mb-0"><small>Min  ₹50 • Up to 30 min</small></p>
                            <p className = "mb-0"><small>{this.props.obj.paymentMethods}</small></p>
                        </div>
                        <div className = "col-3 text-right m-0">
                            <p><span className = "bg-success text-white p-2 font-weight-bold rounded mb-0">{this.props.obj.rating}</span></p>
                            <p className = "text-muted mb-0"><small>{`${this.props.obj.votes} Votes`}</small></p>
                            <p className = "text-muted mb-0"><small>{`${this.props.obj.reviews} reviews`}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantDetails;