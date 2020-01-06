import React from "react";

function BreakOut() {
  return (
    <div className="text-center">
      <h1 className="mt-5 pt-5 display-4 font-weight-bold">
        Break out of the inbox
      </h1>
      <p className="font-weight-normal h5 pt-3 pb-5">
        Working in channels gives everyone in your team a shared view of
        progress and purpose.
      </p>
      <div>
        <video
          className="shadow-lg"
          width="70%"
          autoPlay="autoPlay"
          loop="loop"
        >
          <source
            src="https://slack.com/marketing/img/homepage/video/brand-campaign_inline-video.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
}

export default BreakOut;
