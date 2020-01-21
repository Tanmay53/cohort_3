import React, { Component } from 'react'

export default class slack extends Component {
    render() {
        return (

            <div>

                {/* Navv */}

                <div className="container p-5">
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <ul class="nav">
                                <li class="nav-item">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/498px-Slack_Technologies_Logo.svg.png" height="40px"></img>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="#">Why Slack?</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="#">Solutions</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="#" >Resources</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="#" >Enterprise</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="#" >Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link text-dark" href="#">Sign in</a>

                                </li>
                                <li class="nav-item">
                                    <button className="btn btn-secondary">GET STARTED</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sign Burtton */}

                <div className="container-fluid bg-secondary p-5">
                    <div className="container">
                        <div className="display-4">Slack replaces email</div>
                        <div className="display-4">inside your company</div>
                        <p>
                            <div>Keep conversations organised in Slack, the smart</div>
                            <div>alternative to email.</div>
                        </p>
                        <p>
                            <buttons className="btn btn-primary p-3">TRY SLACK</buttons>
                            <buttons className="btn btn-primary p-3 ml-5">SEE THE DEMO</buttons>
                        </p>
                        <p>
                            <small>Already using Slack? <a href="">Sign in.</a></small>
                        </p>
                    </div>
                </div>

                {/* Video */}

                <div className="container-fluid p-5">
                    <div className="display-4 text-center">Break out of the inbox</div>
                    <p className="text-center">Working in channels gives everyone in your team a shared view of progress and purpose.</p>
                    <p className="p-5">
                        <div className="container">
                            <iframe width="1200" height="680" src="https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_inline-video.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </p>
                    <p className="container p-5">
                        <div className="row">
                            <div className="col-4">
                                <img src="https://img.icons8.com/cotton/64/000000/chat.png"></img>
                                <p className="h5 mt-4">Conversations, organised</p>
                                <p>Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>
                            </div>
                            <div className="col-4">
                                <img src="https://img.icons8.com/cotton/64/000000/chat.png"></img>
                                <p className="h5 mt-4">Conversations, organised</p>
                                <p>Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>
                            </div>
                            <div className="col-4">
                                <img src="https://img.icons8.com/cotton/64/000000/chat.png"></img>
                                <p className="h5 mt-4">Conversations, organised</p>
                                <p>Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>
                            </div>
                        </div>
                    </p>
                    <hr></hr>
                </div>

                {/* Make the change */}

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="p-5">
                                <div className="h1">Make the change to channels</div>
                                <p>Productive teamwork happens in channels – organised spaces for everything related to a project, topic or team.</p>
                                <p className="h6">Learn more about channels  →</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-5">
                                <iframe width="502" height="430" src="https://a.slack-edge.com/085e3/marketing/img/channels/vid/channels-inline1.en-IN.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="">
                                <iframe width="502" height="430" src="https://a.slack-edge.com/085e3/marketing/img/shared-channels/vid/shared-channels-inline3.en-IN.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-5">
                                <div className="h1">Shared channels bring companies together</div>
                                <p>Productive teamwork happens in channels – organised spaces for everything related to a project, topic or team.</p>
                                <p className="h6">Learn more about channels  →</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Crousel */}

                <div className="container-fluid bg-secondary mt-5 p-5">
                    <div className="display-3 text-center">Trusted the world over</div>
                    <p className="h-6 text-center">Teams of every size, shape and sort have already made Slack the place where their work happens.</p>
                    <p className="text-center">
                        <a className="text-success" href="">See all customer stories → </a>
                    </p>

                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://a.slack-edge.com/80588/marketing/img/stories/shopify/slack-customer-shopify.jpg" height="390px" width="1020px" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://a.slack-edge.com/80588/marketing/img/stories/everlane/slack-customer-everlane.jpg" height="390px" width="1020px" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://a.slack-edge.com/80588/marketing/img/stories/intuit/slack-customer-intuit.jpg" height="390px" width="1020px" alt="..."></img>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                        <div className="row p-5">
                            <div className="col-3">
                                <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/trivago-logo.png" height="" width=""></img>
                            </div>
                            <div className="col-3">
                                <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/vodafone-logo.png" height="" width=""></img>
                            </div>
                            <div className="col-3">
                                <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/shopify-logo.png" height="" width=""></img>
                            </div>
                            <div className="col-3">
                                <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/treebo-logo.png" height="" width=""></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Whats New */}

                <div className="container p-5">
                    <div className="text-center display-4 p-5">What’s new at Slack</div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img-top p-3" src="https://a.slack-edge.com/b4782/marketing/img/promos/2019-10-10-engagement.jpg"></img>
                                <div className="card-body">
                                    <small>Blog</small>
                                    <div className="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero facilis, sequi ex temporibus maxime explicabo veniam pariatur. </div>
                                    <div className="d-flex justify-content-between">
                                        <a href="">READ STORY</a>
                                        <a className="h3" href="">→</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img-top p-3" src="https://a.slack-edge.com/ebeb3/marketing/img/promos/shared-channels-hp-promo.png"></img>
                                <div className="card-body">
                                    <small>Blog</small>
                                    <div className="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero facilis, sequi ex temporibus maxime explicabo veniam pariatur. </div>
                                    <div className="d-flex justify-content-between">
                                        <a href="">READ STORY</a>
                                        <a className="h3" href="">→</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img-top p-3" src="https://a.slack-edge.com/80588/marketing/img/promos/gsuite-calendar-email-files.png"></img>
                                <div className="card-body">
                                    <small>Blog</small>
                                    <div className="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero facilis, sequi ex temporibus maxime explicabo veniam pariatur. </div>
                                    <div className="d-flex justify-content-between">
                                        <a href="">READ STORY</a>
                                        <a className="h3" href="">→</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Choose a better way to work */}

                <div className="container-fluid p-5 bg-dark">
                    <div className="text-center display-4 p-2 text-white">Choose a better way to work</div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-secondary p-3">TRY SLACK</button>
                        <button className="btn btn-secondary p-3 ml-3"> CONTACT SALES</button>
                    </div>
                </div>

                {/* Footer */}

                <div className="container mt-4 p-5">
                    <div className="row">
                        <div className="col-3">
                            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg" height="100px"></img>
                        </div>
                        <div className="col-9 mt-3">
                            <div className="row">
                                <div className="col-3">
                                    <strong>PRODUCT</strong>
                                    <div>Why Slack? </div>
                                    <div>Enterprise</div>
                                    <div>Security</div>
                                    <div>Customer stories</div>
                                    <div>Pricing</div>
                                    <div>Slack demo</div>
                                </div>
                                <div className="col-3">
                                    <strong>SLACK FOR TEAMS</strong>
                                    <div>Engineering</div>
                                    <div>Financial services</div>
                                    <div>Sales</div>
                                    <div>IT</div>
                                    <div>Marketing</div>
                                    <div>Customer support</div>
                                    <div>Human resources</div>
                                    <div>Project management</div>
                                    <div>Media</div>
                                </div>
                                <div className="col-3">
                                    <strong>RESOURCES</strong>
                                    <div>Slack Tips</div>
                                    <div>Blog</div>
                                    <div>Slack Certified programme</div>
                                    <div>Help Centre</div>
                                    <div>API</div>
                                    <div>App Directory</div>
                                    <div>Download Slack</div>
                                    <div>Partners</div>
                                </div>
                                <div className="col-3">
                                    <strong>COMPANY</strong>
                                    <div>About us</div>
                                    <div>Leadership</div>
                                    <div>News</div>
                                    <div>Media kit</div>
                                    <div>Careers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
