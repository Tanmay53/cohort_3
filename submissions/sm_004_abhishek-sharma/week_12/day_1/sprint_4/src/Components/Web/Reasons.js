import React from 'react';

class Reasons extends React.Component {
    render() {
        return (
            <div className="container-fluid my-5">
                <div className="row">
                    {/* First Info Box */}
                    <div className="col-4 pl-5">
                        <div className="row">
                            <div className="col">
                                <img src="https://via.placeholder.com/50X50" class="img-fluid" alt="logo1"></img>
                            </div>
                        </div>
                        <div className = "row mt-4">
                            <div className = "col">
                                <h6 className = "font-weight-bold">Conversations, organised</h6>
                            </div>
                        </div>
                        <div className = "row mt-2">
                            <div className = "col">
                                <h5 className = "dataText">Instead of a single overstuffed inbox, 
                                        conversations in Slack happen in dedicated spaces called channels.
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* Second Info Box */}
                    <div className="col-4">
                        <div className="row">
                            <div className="col">
                                <img src="https://via.placeholder.com/50X50" class="img-fluid" alt="logo1"></img>
                            </div>
                        </div>
                        <div className = "row mt-4">
                            <div className = "col">
                                <h6 className = "font-weight-bold">Stay in the loop, not out</h6>
                            </div>
                        </div>
                        <div className = "row mt-2">
                            <div className = "col">
                                <h5 className = "dataText">Slack makes it simple to follow conversations or 
                                        find important information in an easily searchable archive.
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* Third Info Box */}
                    <div className="col-4 pr-5 mb-5">
                        <div className="row">
                            <div className="col">
                                <img src="https://via.placeholder.com/50X50" class="img-fluid" alt="logo1"></img>
                            </div>
                        </div>
                        <div className = "row mt-4">
                            <div className = "col">
                                <h6 className = "font-weight-bold">Give focus a chance</h6>
                            </div>
                        </div>
                        <div className = "row mt-2">
                            <div className = "col">
                                <h5 className = "dataText">Unlike email, Slack lets you choose which conversations 
                                    are most important – and which can wait.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>   
        )
    }
}

export default Reasons
