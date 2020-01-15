import React, { Component } from 'react'

class SlackWeb extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky">
                    <img src="./slackLogo.png" alt="logo" width="120px"></img>
                    <div class=" navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Why slack?</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Solutions</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Resources</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Enterprise</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <div>
                            <button className="btn  mr-3 workspace">Workspace</button>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid bgimg">
                    <br />
                    <div className="row mt-5">
                        <div className="col-6 ml-4 mt-4">
                            <h1 className="display-4 font-weight-bold">Slack replaces email</h1>
                            <h1 className="display-4 font-weight-bold">inside your company</h1>
                            <h5>Keep conversations organised in Slack, the smart</h5>
                            <h5>alternative to email.</h5>
                            <div className="mt-4">
                                <button className="btn btn-lg workspace">TRY SLACK</button>
                                <button className="btn btn-lg workspaceBtn ml-3">SEE THE DEMO</button>
                            </div>
                            <p className="mt-2">Already using Slack?<p className="text-primary">Sign In</p></p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="mt-5">
                            <h1 className="display-4 font-weight-bold text-center">Break out of the inbox</h1>
                            <h5 className="text-center">Working in channels gives everyone in your team a shared view of progress and purpose.</h5>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <video
                            width="900"
                            autoPlay="autoplay"
                            loop="loop">
                            <source src="https://slack.com/marketing/img/homepage/video/brand-campaign_inline-video.mp4"
                                    type="video/mp4"> 
                            </source>
                        </video>
                    </div>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col ml-3">
                                <img src="./logo1.jpeg" alt=""></img>
                                <h3>Conversations, organised</h3>
                                <p className="mt-2">Instead of a single overstuffed inbox,<br/> conversations in Slack happen in dedicated <br/> spaces called channels.</p>
                            </div>
                            <div className="col ml-2">
                                <img src="./logo3.jpeg" alt=""></img>
                                <h3>Stay in the loop, not out</h3>
                                <p className="mt-2">Slack makes it simple to follow conversations <br/> or find important information in an easily <br/> searchable archive.</p>
                            </div>
                            <div className="col ml-2">
                                <img src="./logo2.jpeg" alt=""></img>
                                <h3>Give focus a chance</h3>
                                <p className="mt-2">Unlike email, Slack lets you choose which <br/> conversations are most important – and <br/> which can wait.</p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="mt-3">
                        <div className="row mt-3">
                            <div className="col mt-4">
                                <h1 className="display-4 font-weight-bold ml-3">Make the change to</h1>
                                <h1 className="display-4 font-weight-bold ml-3">channels</h1>
                                <h5 className="ml-3 mt-3">Productive teamwork happens in channels – organised<br/>spaces for everything related to a project, topic or<br/>teams</h5>
                                <h5 className="text-primary mt-3 ml-3">Learn more about channels -></h5>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <video
                                    width = "90%"
                                    autoPlay="autoplay"
                                    loop="loop">
                                    <source src="https://a.slack-edge.com/085e3/marketing/img/channels/vid/channels-inline1.en-IN.mp4"
                                            type="video/mp4"> 
                                    </source>
                                </video>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="mt-3">
                        <div className="row mt-3">
                            <div className="ml-3 col d-flex justify-content-center">
                                <video
                                    width = "90%"
                                    autoPlay="autoplay"
                                    loop="loop">
                                    <source src="https://a.slack-edge.com/085e3/marketing/img/shared-channels/vid/shared-channels-inline3.en-IN.mp4"
                                            type="video/mp4"> 
                                    </source>
                                </video>
                            </div>
                            <div className="col mt-4">
                                <h1 className="display-4 font-weight-bold ml-3">Shared channels</h1>
                                <h1 className="display-4 font-weight-bold ml-3">bring companies</h1>
                                <h1 className="display-4 font-weight-bold ml-3">together</h1>
                                <h5 className="ml-3 mt-3">Now channels can help you work as closely with external<br/>partners and clients as you do with teams down the<br/>corridor.</h5>
                                <h5 className="text-primary mt-3 ml-3">See how with shared channels -></h5>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div style={{backgroundColor:"#F5F5F5"}}>
                        <div>
                            <h1 className="display-4 font-weight-bold text-center">Trusted the world over</h1>
                            <h5 className="text-muted text-center">Teams of every size, shape and sort have already made Slack the place where their<br/>work happens.</h5>
                            <h5 className="text-primary text-center">See all customer stories -></h5>
                        </div>
                        <div className="mt-3">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block" src="https://a.slack-edge.com/80588/marketing/img/stories/lyft/slack-customer-lyft.jpg" alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block" src="https://a.slack-edge.com/80588/marketing/img/stories/lyft/slack-customer-lyft.jpg" alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block " src="https://a.slack-edge.com/80588/marketing/img/stories/lyft/slack-customer-lyft.jpg" alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default SlackWeb
