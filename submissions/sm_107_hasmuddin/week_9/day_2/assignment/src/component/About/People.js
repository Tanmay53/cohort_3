import React from "react";

export default function People() {
  return (
    <div className="container p-4">
      <h3 className="text-center mb-5">CEO</h3>
      <div className="row">
        <div className="col-lg-5 col-12 d-flex justify-content-center">
          <div className="col-lg-8 col-10 text-center">
            <img src="profile.jpg" alt="nitin" className="img-fluid rounded" />
            <p className="my-1">Hasmuddin Ansari</p>
            <p className="my-1 mb-4">Founder, CEO</p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <p className="my-4">
            Hasmuddin bootstrapped and founded <strong>Shopingo</strong> in
            December,2019 . Today, Shopingo has changed the landscape of the
            Indian broking industry.
          </p>
          <p>
            He was named one of the “Top 50 Businessmen to Watch Out for in 2019
            in India” by The Economic Times for pioneering and scaling discount
            broking in India.
          </p>
          <p>Playing Football is his zen. Connect on Linkedin / Twitter</p>
          <div className="row ">
            <div className="col-2">
              <a href="https://www.linkedin.com/in/hasmuddin-ansari-397825156/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxeErY7ND5ycWLALXhJGpkth-kbfb5KpNCf3paTvOqBcscCU-vQ&s"
                  alt="icon"
                  className="img-fluid"
                />
              </a>
            </div>

            <div className="col-3">
              <a href="https://twitter.com/hasmuddin1998">
                <img
                  src="data:image/png;base64,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"
                  alt="icon"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
