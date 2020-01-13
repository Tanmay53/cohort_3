import React from "react";
import LaptopsCards from "./LaptopsCards";

function LaptopsCardsContainer() {
  return (
    <div className="mt-5 row">
      <LaptopsCards
        image="https://images.unsplash.com/photo-1545805524-7b1a4b0ae73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="MacBook Pro"
        text="Stand out from the ordinary."
        link="SHOP NOW >"
      />
      <LaptopsCards
        image="https://images.unsplash.com/photo-1550867788-8d7e72ea8c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="MacBook Air with black screen display"
        text="Powerhouse performance in the ultimate laptop."
        link="SHOP NOW >"
      />
      <LaptopsCards
        image="https://images.unsplash.com/photo-1552857131-0afaed1953f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="white notebook"
        text="silver and black laptop computer on brown wooden desk beside green leather chair"
        link="SHOP NOW >"
      />
      <LaptopsCards
        image="https://images.unsplash.com/photo-1569441508845-c6da9a35924c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="MacBook Air"
        text="Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favourite game."
        link="SHOP NOW >"
      />
    </div>
  );
}

export default LaptopsCardsContainer;
