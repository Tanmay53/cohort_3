import React from "react";
import Nav from "./Nav";
import Icon from "./Icon";
import Footer from "./Footer";
export default function Uber() {
    return (
        <div className="Uber">
            <Nav />
            <header className=" text-white">
                <Icon />
            </header>
            <main>
                <div className="container bg-light">
                    <div>
                        <div className="jumbotron">
                            <h2 className="display-4">
                                Setting 700+ <br /> cities in motion
                            </h2>
                            <p>View all cities</p>
                            <hr class="my-4" />
                        </div>
                        <div className="row">
                            <div className="col">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt=""
                                />
                            </div>
                            <div className="col">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt=""
                                />
                            </div>
                            <div className="col">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt=""
                                />
                            </div>
                            <div className="col">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-6">
                                <div className="jumbotron">
                                    <h2 className="display-4">
                                        Our commitment to your
                                        <br /> safety
                                    </h2>
                                    <p>
                                        With every safety feature we add and
                                        every standard in our Community
                                        Guidelines we uphold, we’re committed to
                                        protecting you on the road ahead. Learn
                                        more about our Community Guidelines
                                    </p>
                                    <a href="#">
                                        Here see all the safety features
                                    </a>
                                </div>
                            </div>
                            <div className="col-6">
                                <img
                                    src="https://via.placeholder.com/400"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="row pt-4 text-left">
                            <div className="col-4">
                                <i class="fas fa-users"></i>
                                <p className="font-weight-bold">About us</p>
                                <p>
                                    Find out how we started, what drives us, and
                                    how we’re igniting opportunity.
                                </p>
                                <a href="#">Learn more</a>
                            </div>
                            <div className="col-4">
                                <i class="fas fa-users"></i>
                                <p className="font-weight-bold">Newsroom</p>
                                <p>
                                    See announcements about our latest releases,
                                    initiatives, and partnerships.
                                </p>
                                <a href="#">Learn more</a>
                            </div>
                            <div className="col-4">
                                <i class="fas fa-users"></i>
                                <p className="font-weight-bold">
                                    global citizienship
                                </p>
                                <p>
                                    Read about our commitment to making a
                                    positive impact in the cities we serve.
                                </p>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <h2 className="display-4 col-6">
                                <a href="#">
                                    Sign up tp drive{" "}
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </h2>
                            <h2 className="display-4 col-6">
                                <a href="#">
                                    Sign up tp ride{" "}
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
