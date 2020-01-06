import React from 'react';
import './Slack.css'

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron top">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <div><h1 className = "display-4 font-weight-bolder">Slack replaces email inside your company</h1></div>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div className = "lead">Keep conversations organised in Slack, the smart alternative to email.</div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <button type="button" className="btnColor btn btn-primary btn-lg"><small>TRY SLACK</small></button>
                  <button type="button" class="btn btn-outline-primary btn-lg ml-1"><small>SEE THE DEMO</small></button>
                </div>
              </div>
              <div className="row mt-2 mb-5">
                <div className="col-8">
                  <div className = "down ">Already Using Slack? <span><a className = "text-decoration-underLine" href="https://slack.com/signin">Sign in</a></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron
