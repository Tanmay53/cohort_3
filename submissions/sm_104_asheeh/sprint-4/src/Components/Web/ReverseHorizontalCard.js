import React, { Component } from 'react'

export default class ReverseHorizontalCard extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12 ">
                    <div className="card mb-3" >
                        <div className="row no-gutters  d-flex flex-nowrap">
                            <div border border-darkclassName="col-md-6">
                                    <img src="https://via.placeholder.com/728x500.png" className="card-img" alt="demo" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h3 className="card-title">Shared channels bring companies together</h3>
                                    <p className="card-text">Now channels can help you work as closely with external partners and clients as you do with teams down the corridor.</p>
                                    <a className="" href="https://slack.com/intl/en-in/features/shared-channels">See how with shared channels --></a>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}
