import React from "react";

export default function Topinfo() {
  return (
    <div className="container">
      <div className="p-5 border-bottom text-center">
        <h3>
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h3>
      </div>
      {/* info   */}
      <div className="row p-5">
        <div className="col-lg-6 col-12">
          We kick-started operations on the 15th of August, 2010 with the goal
          of breaking all barriers that traders and investors face in India in
          terms of cost, support, and technology.
          <br /> <br /> Today, our disruptive pricing models and in-house
          technology have made us the biggest stock broker in India in terms of
          active retail clients.
          <br /> <br /> Over 1.5+ million clients place millions of orders every
          day through our powerful ecosystem of investment platforms,
          contributing over 15% of all Indian retail trading volumes.
        </div>
        <div className="col-lg-6 col-12">
          In addition, we run a number of popular open online educational and
          community initiatives to empower retail traders and investors. <br />{" "}
          <br />
          Rainmatter, our fintech fund and incubator, has invested in several
          fintech startups with the goal of growing the Indian capital markets.{" "}
          <br /> <br />
          And yet, we are always up to something new every day. Catch up on the
          latest updates on our blog or see what the media is saying about us.
        </div>
      </div>
    </div>
  );
}
