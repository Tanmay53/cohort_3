import React from "react";

export default function Tools() {
  return (
    <div className="text-center">
      <h2 className="text-center mt-5 text-muted nothingCall">My Tools</h2>
      <div className="d-flex flex-column align-items-center flex-md-row  justify-content-center mt-5 pt-3">
        <div>
          <img
            src="https://cdn.svgporn.com/logos/git-icon.svg"
            alt=""
            height="140px"
            className="mx-5 d-block"
          />
          <small>Git</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/npm-2.svg"
            alt=""
            height="140px"
            className="mx-4 d-block"
          />
          <small>NPM</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/visual-studio-code.svg"
            alt=""
            height="140px"
            className="mx-5 d-block react-margin"
          />
          <small>VS Code</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/netlify.svg"
            alt=""
            height="140px"
            className="mx-4 d-block"
          />
          <small>Netlify</small>
        </div>
        <hr className="d-sm-block d-md-none w-50 " />
        <div>
          <img
            src="https://cdn.svgporn.com/logos/postman.svg"
            alt=""
            height="140px"
            className="mx-5 d-block"
          />
          <small>Postman</small>
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
    </div>
  );
}
