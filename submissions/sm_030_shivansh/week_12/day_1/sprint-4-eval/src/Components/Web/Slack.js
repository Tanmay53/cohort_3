import React from 'react';
import './Slack.css'

class Slack extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*Navigation section start here */}
                <div className="mb-5">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                        <a className="navbar-brand" href="#">Slack</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Why Slack?
        </a>

                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>

                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Solutions
        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>

                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Resources
        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>

                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Enterprise
        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>

                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pricing
        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>

                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="d-flex my-2 my-lg-0">

                            <a className="mr-sm-2 text-dark mt-1" href="#">Sign In</a>
                            <button className="btn btn-primary my-2 my-sm-0" type="submit">GET STARTED</button>

                        </div>

                    </nav>
                </div>

                {/* navbar end here*/}

                {/* Intro  section  */}
                <div id="intro">
                    <div className="container">
                        <div className="row ">
                            <div className="col-12 col-lg-6 my-5">
                                <h1 className="text-left display-4">Slack Replaces Email Inside Your Company</h1>
                                <h5>Keep conversations organised in Slack, the smart alternative to email.</h5>

                                <div>
                                    <button className="btn btn-info">Try Slack</button>
                                    <button className="btn btn-outline-info">See The Demo</button>

                                </div>
                                <small>Already using Slack? <a href="#">Sign in</a>.</small>
                            </div>

                        </div>

                    </div>

                </div>
                {/*End of intro section */}

                {/*Description*/}
                <div id="desc" class="container my-5">
                    <div className="container text-center mt-5">
                        <h1>Break out of the inbox</h1>
                        <p>Working in channels gives everyone in your team a shared view of progress and purpose.</p>
                        <video controls className="mb-5">
                            <source src="https://www.youtube.com/watch?v=EYqxQGmQkVw" type="video" />
                            Your browser does not support the video tag.
                    </video>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <h6>Conversations, organised</h6>
                            <p>Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>


                        </div>
                        <div className="col-12 col-lg-4">
                            <h6>Stay in the loop, not out</h6>
                            <p>Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>


                        </div>
                        <div className="col-12 col-lg-4">
                            <h6>Give focus a chanced</h6>
                            <p>Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>


                        </div>
                    </div>
                </div>
                <hr />
                {/* partition */}
                <div className="container my-5">
                    <div className="row mt-5">
                        <div className="col-12 col-lg-6 mb-5">
                            <h1>Make the change to channels</h1>
                            <p>Productive teamwork happens in channels – organised spaces for everything related to a project, topic or team.</p>
                            <a href="#">Learn more About the channel --></a>
                        </div>
                        <div className="col-12 col-lg-6 text-center mb-5">
                            <img src="https://via.placeholder.com/350x150"></img>
                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            <img src="https://via.placeholder.com/350x150"></img>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1>Shared channels bring companies together</h1>
                            <p>Now channels can help you work as closely with external partners and clients as you do with teams down the corridor.</p>
                            <a href="#">See how with shared channel --></a>
                        </div>
                    </div>
                </div>

                {/*Carousel */}
                <div className="container">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://via.placeholder.com/728x300.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://via.placeholder.com/728x300.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://via.placeholder.com/728x300.png" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/trivago-logo.png"></img>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/vodafone-logo.png"></img>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/shopify-logo.png"></img>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/treebo-logo.png"></img>
                        </div>
                    </div>
                </div>

                <div className="container text-center">
                    <h1>What's new at Slack</h1>
                    <div class="card-deck">
                        <div class="card">
                            <img src="https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>

                        </div>
                        <div class="card">
                            <img src="https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>

                        </div>
                        <div class="card">
                            <img src="https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="contact" className="text-center ">
                    <div className="container mb-5 ">
                        <h1 className="text-white mt-5">Choose a better way to  work</h1>
                        <div className="d-flex justifyy-content-center">



                            <button className="btn btn-light">Try Slack</button>


                            <button className="btn btn-info">Contact Sales</button>
                        </div>



                    </div>


                </div>
            </div>

        )
    }
}

export default Slack;