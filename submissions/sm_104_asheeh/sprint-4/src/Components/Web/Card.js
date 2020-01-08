import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="container ">
                <div className="row d-flex justify-content-center">
                    <div className="col-3 m-1">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Stay in the loop, not out</h5>
                                <p className="card-text">Slack makes it simple to follow conversations or find important information in an easily searchable archive.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 m-1">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Give focus a chance</h5>
                                <p className="card-text">Unlike email, Slack lets you choose which conversations are most important – and which can wait.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 m-1">
                    <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Conversations, organised</h5>
                                <p className="card-text">Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
