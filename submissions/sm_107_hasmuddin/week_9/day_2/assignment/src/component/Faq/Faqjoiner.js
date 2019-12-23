import React from "react";
import Faq from "./Faq";
import { Route } from "react-router-dom";
export default function Faqjoiner() {
  return (
    <div>
      <Route path="/faq" component={Faq} />
    </div>
  );
}
