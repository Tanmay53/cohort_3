import React from "react";
import LaptopsCards from "../LaptopsCard/LaptopsCards";

function ForWork() {
  return (
    <div>
      <h4 className="mt-5 pt-1 font-weight-bold">For Work</h4>
      <div className="mt-3 row">
        <LaptopsCards
          image="https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="blue circuit board"
          text="Download the free 90-day evaluation for IT professionals."
          link="DOWNLOAD NOW &nbsp; >"
        />
        <LaptopsCards
          image="https://images.unsplash.com/photo-1544281679-70f2022b5ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="black and gray laptop computer"
          text="Access your files from anywhere, online or offline."
          link="SHOW NOW &nbsp; >"
        />
        <LaptopsCards
          image="https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="shallow focus photography of black Xbox controller"
          text="Explore Kubernetes
        Learn how Kubernetes works and get started with cloud native app development."
          link="SHOW NOW &nbsp; >"
        />
        <LaptopsCards
          image="https://images.unsplash.com/photo-1577530124527-794938c1594a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="white game controller and orange Android smartphone 2020"
          text="Download Visual Studio 2019, the productive, modern and innovative IDE."
          link="SHOW NOW &nbsp; >"
        />
      </div>
    </div>
  );
}

export default ForWork;
