import React from "react";

function MakeChange() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-5">
          <h1 className="display-5 font-weight-bold pl-5 mt-5 pt-5">
            Make the change to channels
          </h1>
          <p className="h6 font-weight-normal pl-5">
            Productive teamwork happens in channels – organised spaces for
            everything related to a project, topic or team.
          </p>
          <a href="#" className="ml-5 mt-3">
            Learn more about channels
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <video
            className="shadow-lg"
            width="80%"
            autoPlay="autoPlay"
            loop="loop"
          >
            <source
              src="https://a.slack-edge.com/085e3/marketing/img/channels/vid/channels-inline1.en-IN.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="col-12 py-5"></div>
        <div className="col-1"></div>
        <div className="col-6">
          <video
            className="shadow-lg"
            width="80%"
            autoPlay="autoPlay"
            loop="loop"
          >
            <source
              src="https://a.slack-edge.com/085e3/marketing/img/shared-channels/vid/shared-channels-inline3.en-IN.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="col-5">
          <h1 className="display-5 font-weight-bold pl-5 mt-5 pt-5">
            Shared channels bring companies together
          </h1>
          <p className="h6 font-weight-normal pl-5">
            Productive teamwork happens in channels – organised spaces for
            everything related to a project, topic or team.
          </p>
          <a href="#" className="ml-5 mt-3">
            See how with shared channels
          </a>
        </div>
      </div>
    </div>
  );
}

export default MakeChange;
