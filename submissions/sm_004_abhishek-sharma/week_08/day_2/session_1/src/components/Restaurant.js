import React from 'react';
import './Text.css'
const Card = (props) => {
    const { id, restaurantName, categories, cost, min, time, payment, rating, totalVotes, totalReviews, imgSrc } = props.data
    return (
        <div className="col-5 ml-5 px-4">
            <div className="container rounded shadow border my-3">
                <div className="row ">
                    <div className="col-3 pt-3 ">
                        <img className=" restaurantPic rounded" src={imgSrc} alt={id}></img>
                    </div>
                    <div className="col-7">
                        <div className="row mt-2">
                            <div className="col">
                                <div className="text-danger"><h3 className="font-weight-bold cardHeight text-truncate">{restaurantName}</h3></div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col">
                                <div className="textCardSize text-muted text-truncate">{categories}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="textCardSize text-muted">{cost}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col textCardSize text-nowrap">
                                <div className = "float-left mr-1">
                                    {min}
                                </div>
                                <span className = "float-left mr-1">•</span>
                                <div className = "float-left">
                                    {time}
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col textCardSize">
                                <div>{payment}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 ">
                        <div className="row mt-3">
                            <div className="col">
                                <div class="badge badge-success float-right"><h6 className = "font-weight-bold">{rating}</h6></div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <div className="text-muted muteTextSize text-nowrap float-right">{totalVotes} votes</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="text-muted muteTextSize text-nowrap float-right">{totalReviews} votes</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border border">
                    <div className="col-4 offset-8 border py-2">
                        <div className="text-success">
                            Order Online >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

