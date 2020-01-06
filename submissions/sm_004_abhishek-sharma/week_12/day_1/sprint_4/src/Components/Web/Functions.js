import React from 'react';
import './Slack.css'

class Functions extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron bg-white">
          <div className="row">
            <div className="col-6 pl-5">
              <div className="row">
                <div className="col">
                  <div><h1 className = "display-4 font-weight-bolder">Make the change to channels</h1></div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <div className = "lead">Productive teamwork happens in channels – 
                    organised spaces for everything related to a project, topic or team.</div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                    <a href = "https://slack.com/intl/en-in/features/channels">Learn more about the channels --></a>  
                </div>
              </div>
            </div>
            <div className = "col-6">
                <div className = "row">
                    <div className = "col-10 functionImg1">

                    </div>

                </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Functions
