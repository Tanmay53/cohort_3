import React from "react";
import { Route } from "react-router-dom";
import SignupForm from "./SignupForm";
export default function Signup() {
  return (
    <div>
      <Route path="/signup" component={SignupForm} />
    </div>
  );
}
