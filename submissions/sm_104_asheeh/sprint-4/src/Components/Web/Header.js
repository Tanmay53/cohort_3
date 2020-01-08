import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            // <div className="container-fluid">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                      <img src="/slack.jpg" width="70" height="50" alt="rg" />
                    </a>
                    <a className="navbar-brand" href="#">Why Slack?</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Solutions <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Resources</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Enterprise</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <button className="btn bg-dark my-2 my-sm-0  text-white" type="submit">Your workplaces</button>
                        </form>
                    </div>
                    </nav>
            
            // </div>
        )
    }
}
