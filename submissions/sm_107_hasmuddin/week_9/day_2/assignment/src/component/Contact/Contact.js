import React from "react";
import { Route } from "react-router-dom";
import Contactinfo from "./Contactinfo";

export default function Pricing() {
  return (
    <div>
      <Route path="/contact" component={Contactinfo} />
    </div>
  );
}
