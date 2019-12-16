import React from "react";

export default function Icon(props) {
    return (
        <div>
            <div className="container text-center pt-4 text-white ">
                <div className="row">
                    <div className="col-4" className="bg-transparent"></div>
                    <div className="col-1">
                        <div className="row ">
                            <i class="fas fa-signal "></i>
                        </div>
                        <div className="row">
                            <p>Earn</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row ">
                            <i class="fas fa-car-side"></i>{" "}
                        </div>
                        <div className="row">
                            <p>Ride</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row ">
                            <i class="fas fa-utensils"></i>{" "}
                        </div>
                        <div className="row">
                            <p>Eat</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row ">
                            <i class="fas fa-shipping-fast"></i>{" "}
                        </div>
                        <div className="row">
                            <p>Freight</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row ">
                            <i class="fas fa-business-time"></i>{" "}
                        </div>
                        <div className="row">
                            <p>Business</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row ">
                            <i class="fas fa-business-time"></i>{" "}
                        </div>
                        <div className="row">
                            <p>Work</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row ">
                            <i class="fas fa-business-time"></i>{" "}
                        </div>
                        <div className="row">
                            <p>Bike</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row ">
                            <i class="fas fa-business-time"></i>{" "}
                        </div>
                        <div className="row">
                            <p>Fly</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div class="jumbotron w-50 text-dark text-left">
                        <h1 class="display-4">
                            Get in the driver's seat and get paid
                        </h1>
                        <p class="lead">
                            Drive on the largest network of active riders.
                        </p>

                        <a class="btn btn-dark btn-lg" href="#" role="button">
                            Sign up to drive
                        </a>
                        <p>Learn more about driving and delivering</p>
                        <hr class="my-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
