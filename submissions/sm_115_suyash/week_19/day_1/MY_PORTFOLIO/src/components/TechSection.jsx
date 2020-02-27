import React from "react";

export default function TechSection() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-muted pt-5 nothingCall">Technology Stack</h2>
      </div>
      <div className=" d-flex flex-column flex-md-row justify-content-center mt-5 pt-3">
        <img
          src="https://cdn.svgporn.com/logos/html-5.svg"
          alt=""
          height="140px"
          className="mx-5 d-block "
        />
        <hr className="d-sm-block d-md-none w-50 " />
        <img
          src="https://cdn.svgporn.com/logos/javascript.svg"
          alt=""
          height="130px"
          className="mx-4 d-block  rounded"
        />
        <hr className="d-sm-block d-md-none w-50 " />
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt=""
          height="140px"
          className="mx-4 d-block "
        />
        <hr className="d-sm-block d-md-none w-50 " />
        <img
          src="https://cdn.svgporn.com/logos/bootstrap.svg"
          alt=""
          height="130px"
          className="mx-4 d-block "
        />
        <hr className="d-sm-block d-md-none w-50 " />
        <img
          src="https://cdn.svgporn.com/logos/css-3.svg"
          alt=""
          height="140px"
          className="mx-5 d-block "
        />
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
      <div className="container d-flex flex-column flex-md-row justify-content-start pt-4">
        <img
          src="https://cdn.svgporn.com/logos/python.svg"
          alt=""
          height="140px"
          className=" d-block svg-margin"
        />
        <hr className="d-sm-block d-md-none w-50 " />
        <img
          src="https://cdn.svgporn.com/logos/mysql.svg"
          alt=""
          height="140px"
          className=" d-block mx-4"
        />
        <hr className="d-sm-block d-md-none w-50 " />
        <img
          src="https://cdn.svgporn.com/logos/redux.svg"
          alt=""
          height="140px"
          className=" d-block mx-4"
        />
        <hr className="d-sm-block d-md-none w-50 " />
        <img
          src="https://cdn.svgporn.com/logos/flask.svg"
          alt=""
          height="140px"
          className="  d-block mx-4 "
        />
        <hr className="d-sm-block d-md-none w-50 " />
      </div>
      <div className="ml-5 pl-5 d-none d-md-block">
        <div
          className="bg-info container  d-none d-md-block"
          style={{
            clipPath:
              "polygon(8% 0%, 16% 30%, 24% 0%, 32% 30%, 40% 0%, 48% 30%, 56% 0%, 64% 30%, 72% 0%, 80% 30%,0% 30% )",
            height: "20vh",
            marginLeft: "3.5rem"
          }}
        ></div>
      </div>
    </>
  );
}
