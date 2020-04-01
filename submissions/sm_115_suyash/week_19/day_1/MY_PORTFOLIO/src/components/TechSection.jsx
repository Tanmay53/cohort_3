import React from "react";

export default function TechSection() {
  return (
    <div className="text-center">
      <div className="text-center">
        <h2 className="text-muted pt-5 nothingCall">Technology Stack</h2>
      </div>
      <div className="d-flex flex-column align-items-center flex-md-row justify-content-center mt-5 pt-3">
        <div>
          <img
            src="https://cdn.svgporn.com/logos/html-5.svg"
            alt=""
            height="130px"
            className="mx-5 d-block "
          />
          <small>HTML</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/javascript.svg"
            alt=""
            height="120px"
            className="mx-5 d-block  rounded"
          />
          <small>JS</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/react.svg"
            alt=""
            height="130px"
            className="mx-4 d-block react-margin"
          />
          <small>React</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/bootstrap.svg"
            alt=""
            height="120px"
            className="ml-4 mr-5 d-block "
          />
          <small>Boot Strap</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/css-3.svg"
            alt=""
            height="130px"
            className="mx-5 d-block "
          />
          <small>CSS</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
      </div>
      <div
        className="bg-info ml-5 d-none d-md-block"
        style={{
          clipPath:
            "polygon(8% 0%, 16% 30%, 24% 0%, 32% 30%, 40% 0%, 48% 30%, 56% 0%, 64% 30%, 72% 0%, 80% 30%, 88% 0%, 96% 30%,0% 30% )",
          height: "20vh"
        }}
      ></div>
      <div className="container d-flex flex-column align-items-center flex-md-row justify-content-center pt-4">
        <div>
          <img
            src="https://cdn.svgporn.com/logos/python.svg"
            alt=""
            height="120px"
            className=" d-block mr-5 svg-margin"
          />
          <small className="python-small">Python</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/mysql.svg"
            alt=""
            height="120px"
            className=" d-block mr-1"
          />
          <small>MySQL</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/redux.svg"
            alt=""
            height="120px"
            className=" d-block mx-5"
          />
          <small>Redux</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/flask.svg"
            alt=""
            height="120px"
            className="d-block mx-5"
          />
          <small>Flask</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
      </div>
      <div className="d-none d-md-flex justify-content-center align-items-center w-100">
        <div
          className="bg-info container  d-none d-md-block"
          style={{
            clipPath:
              "polygon(8% 0%, 16% 30%, 24% 0%, 32% 30%, 40% 0%, 48% 30%, 56% 0%, 64% 30%, 72% 0%, 80% 30%,0% 30% )",
            height: "20vh",
            marginLeft: "10.5rem"
          }}
        ></div>
      </div>
    </div>
  );
}
