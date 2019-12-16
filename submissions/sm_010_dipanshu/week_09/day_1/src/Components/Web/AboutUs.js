import React from "react";
class AboutUs extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <div className="d-flex justify-content-center ml-4">
          <div className="card border-0 rounded-0 p-2 col-3 ml-5">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg"
              className="mt-3 ml-3 mr-auto"
              alt="..."
              height="30"
            />
            <div className="card-body mt-3">
              <h5 className="card-title">About Us</h5>
              <p className="card-text small">
                Find out how we started, what drives us, and how we’re igniting
                opportunity.
              </p>
              <div className="mt-3">
                <a className="small text-dark" href="">
                  <u>Learn more</u>
                </a>
              </div>
            </div>
          </div>

          <div className="card border-0 rounded-0 p-2 col-3">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg"
              className="mt-3 ml-3 mr-auto"
              alt="..."
              height="30"
            />
            <div className="card-body mt-3">
              <h5 className="card-title">Newsroom</h5>
              <p className="card-text small">
                See announcements about our latest releases, initiatives, and
                partnerships.
              </p>
              <div className="mt-3">
                <a className="small text-dark" href="">
                  <u>Learn more</u>
                </a>
              </div>
            </div>
          </div>

          <div className="card border-0 rounded-0 p-2 col-3">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg"
              className="mt-3 ml-3 mr-auto"
              alt="..."
              height="30"
            />
            <div className="card-body mt-3">
              <h5 className="card-title">Global citizenship</h5>
              <p className="card-text small">
                Read about our commitment to making a positive impact in the
                cities we serve.
              </p>
              <div className="mt-3">
                <a className="small text-dark" href="">
                  <u>Learn more</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
