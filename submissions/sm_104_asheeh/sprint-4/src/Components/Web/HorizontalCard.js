import React, { Component } from 'react'

export default class HorizontalCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="card-body m-auto">
                                        <h3 className="card-title">Make the change to channels</h3>
                                        <p className="card-text">Productive teamwork happens in channels – organised spaces for everything related to a project, topic or team.</p>
                                        <a className="" href="https://slack.com/intl/en-in/features/channels">Learn more about channels --></a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src="https://via.placeholder.com/728x500.png" className="card-img" alt="demo" />
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
