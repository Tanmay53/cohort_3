import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <div>
                <div className="card bg-dark text-white ">
                    <img src="" className="card-img" height="400px" width="100%" alt="..." />
                    <div className="card-img-overlay ml-4">
                        <h1 className="card-title">Slack replaces email<br />inside your company</h1>
                        <p className="card-text">Keep conversations organised in Slack, the smart<br /> alternative to email.</p>
                        <div className="d-flex ml-4">
                          <button type="button" class="btn btn-warning mr-1">TRY SLACK</button>
                          <button type="button" class="btn btn-outline-warning ml-1">SEE THE DEMO </button>
                        </div>
                        <div className="d-flex mt-2 ml-4">
                            <p className="card-text">Already using Slack?</p>
                            <a className="" href="https://slack.com/signin">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
