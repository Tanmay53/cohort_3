import React from "react";

class Slack extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nav:["Why slack?", "Solution", "Resource", "Enterprise", "Pricing"]
        }
    }
        
    
    render() {
        return (
            <div>
                <div className = "container-fluid mt-4 mb-4">
                    <div className ="row">
                        <div className ="col-2">
                            <img src= "slack.png" className ="iconsize" />
                        </div>
                        <div className ="col-5">
                            <div className ="row">
                                {this.state.nav.map((ele) => {
                                    return (
                                        <div className= "col">{ele}</div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className ="col-5">
                                <div className ="row">
                                    <div className ="col-8"></div>
                                    <div className ="col-4">
                                    <button className ="btn btn-warning">My Workspace</button>
                                    </div>
                                </div>
                            
                        </div>
                       
                    </div>
                </div>
                <div className ="container-fluid bg-secondary">
                    <div className ="row">
                        <div className="col-6">
                            <h1 className="display-4 m-4"><b>Slack replaces Email</b></h1>
                            <h1 className="display-4 m-4"><b>inside your company</b></h1>
                            <p className ="size m-2">Keep conversations organised in Slack, the smart alternative to email.</p>
                            <button className ="btn btn-info m-4">TRY SLACK</button>
                            <button className ="btn btn-info ml-4">SEE THE DEMO</button>
                            <p><small>Already Using slack? sign in</small></p>
                        </div>
                    </div>
                </div>
                <div className ="container mt-4">
                    <center><h1 className ="display-4"><b>Break out of the inbox</b></h1></center>
                    <center><p  className ="mt-2">Working in channels gives everyone in your team a shared view of progress and purpose.</p></center>
                    <div className ="row">
                        <div className ="col-3"></div>
                        <div className ="animationsection bg-primary col-6 mb-4">

                        </div>
                        <div className ="col-3"></div>
                    </div>
                </div>
                <div className ="container-fluid m-4">
                    <div className ="row">
                        <div className ="col-4">
                            <center><img src ="#" /></center>
                            <h4>Conversations, organised</h4>
                            <p>Instead of a single overstuffed inbox, 
                                conversations in Slack happen in 
                                dedicated spaces called channels.</p>
                        </div>
                        <div className ="col-4">
                        <center><img src ="#" /></center> 
                            <h4>Stay in the loop, not out</h4>
                            <p>Slack makes it simple to follow conversations 
                                or find important information in an easily searchable archive.</p>
                        </div>
                        <div className ="col-4">
                        <center><img src ="#" /></center>
                            <h4>Give focus a chance</h4>
                            <p>Unlike email, Slack lets you choose which 
                                conversations are most important – and which can wait..</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className ="container mt-4 mb-4">
                    <div className ="row">
                        <div className ="col-6">
                            <h1 className ="display-4">Make the change to channels</h1>
                            <p className ="fonts">Productive teamwork happens in channels – organised spaces for everything 
                                related to a project, topic or team.</p>
                            <p>Learn more about channel</p>
                        </div>
                        <div className ="col-6">

                        </div>
                    </div>
                </div>
                <div className ="container mt-4 mb-4">
                    <div className ="row">
                        <div className ="col-6"></div>
                        <div className ="col-6">
                            <h1 className ="display-4">Shared channels bring companies together</h1>
                            <p className ="fonts">Now channels can help you work as closely with external
                                partners and clients as you do with teams down the corridor.</p>
                            <p>See how with shared channels</p>
                        </div>
                    </div>
                </div>

                <div className ="container-fluid mt-4 mb-4 bg-primary">
                    <div className ="row">
                        <h1 className ="display-4">Trusted the world over</h1>
                        <p>Teams of every size, shape and sort have already made 
                            Slack the place where their work happens.</p>
                            <div className ="row">
                                <div className = "col">
                                    <h3>trivago</h3>
                                </div>
                                <div className = "col">
                                    <h3>vodafone</h3>
                                </div>
                                <div className = "col">
                                    <h3>shopify</h3>
                                </div>
                                <div className = "col">
                                    <h3>treebo</h3>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slack;