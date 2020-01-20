import React from 'react'

function Card(props) {
    return (
        <>
        {
        props.RestDetails.map(restaurant => {
                return (
                    <div key={restaurant.key} className="col-6">
                        <div className="card mb-3" style={{maxWidth: "600px"}} >
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src={restaurant.img} className="card-img" alt="URU" />
                                </div>
                                <div className="col-md-6">
                                <div className="card-body text-left">
                                    <h4 className="card-title">{restaurant.name} </h4>
                                    <p className="card-text mb-0 pb-0">Dishes: {restaurant.dishes} </p>
                                    <p className="card-text mb-0 pb-0">Cost: Rs.{restaurant.cost} for one. </p>
                                    <p className="card-text mb-0 pb-0">Min Order Value: Rs.{restaurant.minOrder} </p>
                                    <p className="card-text mb-0 pb-0">Delivery Time: Up to {restaurant.deliveryTime} </p>
                                    <p className="card-text mb-0 pb-0">Payment mode: {restaurant.paymentMode} </p>
                                </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="text-right mr-1 mt-1">
                                        <a className="btn btn-success" href="#" role="button">{restaurant.rating} </a>
                                        <p className="mb-0 pb-0">{restaurant.votes} votes </p>
                                        <p className="">{restaurant.reviews} reviews </p>

                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-12 text-right">
                                    <button className="text-success">Order online ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
       </> 
    )
}

export default Card
