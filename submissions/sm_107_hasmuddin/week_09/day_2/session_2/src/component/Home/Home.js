import React from "react";
import HomeJoiner from "./HomeJoiner";
import { Route } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Route path="/" exact component={HomeJoiner} />
    </div>
  );
}
