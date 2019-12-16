import React from "react";

class Motto extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <div className="container-fluid d-flex justify-content-center">
          <div className="p-3 col-4">
            <h3>Our commitment to your</h3>
            <h3>safety</h3>
            <p className="text-left mt-3">
              With every safety feature we add and every standard in our
              Community Guidelines we uphold, we’re committed to protecting you
              on the road ahead. Learn more about our Community Guidelines here.
            </p>
            <div className="mt-3">
              <a className="small text-dark" href="">
                <u>See all safety features</u>
              </a>
            </div>
          </div>
          <div className="ml-5">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_496,h_331/v1558736931/assets/e5/fb1f43-f1bf-4dd2-b62d-6015c758d2ee/original/Safety_ilo.svg"
              className="mt-5"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Motto;
