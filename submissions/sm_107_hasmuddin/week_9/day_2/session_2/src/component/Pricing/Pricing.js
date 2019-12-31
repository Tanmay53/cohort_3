import React from "react";
import { Route } from "react-router-dom";
import PricingJoiner from "./PricingJoiner";

export default function Pricing() {
  return (
    <div>
      <Route path="/pricing" component={PricingJoiner} />
    </div>
  );
}
