import React from "react";
import LaptopsCards from "./LaptopsCards";

function LaptopsCardsContainer() {
  return (
    <div className="mt-5 row">
      <LaptopsCards
        image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2Ni4y?ver=e1d6&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
        title="Surface Pro 6"
        text="Stand out from the ordinary."
        link="SHOP NOW >"
      />
      <LaptopsCards
        image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWfbJT?ver=8259&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
        title="Surface Book 2"
        text="Powerhouse performance in the ultimate laptop."
        link="SHOP NOW >"
      />
      <LaptopsCards
        image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW9wPJ?ver=211f&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
        title="Xbox One X"
        text="The world's most powerful console."
        link="SHOP NOW >"
      />
      <LaptopsCards
        image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37bh1?ver=33cd&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
        title="Xbox Game Pass Ultimate"
        text="Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favourite game."
        link="SHOP NOW >"
      />
    </div>
  );
}

export default LaptopsCardsContainer;
