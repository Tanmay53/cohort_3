import React from "react";
import { Route } from "react-router-dom";
import AboutJoiner from "./AboutJoiner";

export default function About() {
  return (
    <div>
      <Route path="/about" component={AboutJoiner} />
    </div>
  );
}