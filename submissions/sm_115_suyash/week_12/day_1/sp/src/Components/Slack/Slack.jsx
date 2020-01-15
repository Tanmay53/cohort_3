import React from "react";
import Nav from "./Nav";
import Showcase from "./Showcase";
import BreakOut from "./BreakOut";
import GiveFocus from "./GiveFocus";
import MakeChange from "./MakeChange";
// import Trusted from "./Trusted";

function Slack() {
  return (
    <div>
      <Nav />
      <Showcase />
      <BreakOut />
      <div className="container-fluid">
        <div className="row">
          <GiveFocus
            head="Conversations, organised"
            para="Instead of a single overstuffed inbox,conversations in Slack happen in
        dedicated spaces called channels."
          />
          <GiveFocus
            head="Stay in the loop, not out"
            para="Slack makes it simple to follow conversations or find important information in an easily searchable archive."
          />
          <GiveFocus
            head="Give focus a chance"
            para="Instead of a single overstuffed inbox,conversations in Slack happen in
        dedicated spaces called channels."
          />
        </div>
      </div>
      <hr />
      <MakeChange />
      {/* <Trusted /> */}
    </div>
  );
}

export default Slack;
