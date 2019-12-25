import React from "react";

export default function People() {
  return (
    <div className="container">
      <h3 className="text-center mb-5">People</h3>
      <div className="row">
        <div className="col-lg-5 col-12 d-flex justify-content-center">
          <div className="col-lg-8 col-10 text-center">
            <img
              src="https://zerodha.com/static/images/nithin-kamath.jpg"
              alt="nitin"
              className="img-fluid rounded-circle"
            />
            <p className="my-1">Nithin Kamath</p>
            <p className="my-1 mb-4">Founder, CEO</p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <p className="my-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He was named one of the “Top 10 Businessmen to Watch Out for in 2016
            in India” by The Economic Times for pioneering and scaling discount
            broking in India.
          </p>
          <p>Playing basketball is his zen. Connect on TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}
