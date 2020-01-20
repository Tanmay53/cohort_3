import React from "react";
import Carusal from "./HomeItems/Carusal/Carusal";
import LaptopsCardsContainer from "./HomeItems/LaptopsCard/LaptopsCardsContainer";
import XboxOne from "./HomeItems/XboxOne/XboxOne";
import ForWork from "./HomeItems/ForWork/ForWork";

function Home() {
  return (
    <>
      <div className="container">
        <Carusal />
        <LaptopsCardsContainer />
        <XboxOne />
        <ForWork />
      </div>
    </>
  );
}

export default Home;
