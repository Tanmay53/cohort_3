import React from "react";
import LaptopsCards from "../LaptopsCard/LaptopsCards";

function ForWork() {
  return (
    <div>
      <h4 className="mt-5 pt-1 font-weight-bold">For Work</h4>
      <div className="mt-3 row">
        <LaptopsCards
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1CmIw?ver=e555&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
          title="Windows 10 Enterprise"
          text="Download the free 90-day evaluation for IT professionals."
          link="DOWNLOAD NOW &nbsp; >"
        />
        <LaptopsCards
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2mheW?ver=527a&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&x=444&y=171&aim=true"
          title="Office 365 for Business"
          text="Access your files from anywhere, online or offline."
          link="SHOW NOW &nbsp; >"
        />
        <LaptopsCards
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3sKm8?ver=08d4&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
          title="Explore Kubernetes"
          text="Explore Kubernetes
        Learn how Kubernetes works and get started with cloud native app development."
          link="SHOW NOW &nbsp; >"
        />
        <LaptopsCards
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OfW4?ver=3149&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
          title="Get Visual Studio 2019"
          text="Download Visual Studio 2019, the productive, modern and innovative IDE."
          link="SHOW NOW &nbsp; >"
        />
      </div>
      <ul>
        <li className="mr-3 d-inline-block text-muted">Follow Microsoft</li>
      </ul>
      <a
        href="https://www.facebook.com/"
        target="_target"
        className="mr-3 mt-5 d-inline-block"
      >
        <i class=" fab fa-facebook fa-2x text-info bg-white"></i>
      </a>
      <a
        href="https://www.twitter.com/"
        className="mr-3 d-inline-block "
        target="_target"
      >
        <i class=" fab fa-twitter-square fa-2x text-primary bg-white"></i>
      </a>
      <a
        href="https://www.youtube.com/"
        className="mr-3 d-inline-block"
        target="_target"
      >
        <i class=" fab fa-youtube-square fa-2x text-danger"></i>
      </a>
    </div>
  );
}

export default ForWork;
