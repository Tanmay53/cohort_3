import React from "react";

const Section1 = () => {
  return (
    <div className="container text-center">
      <h2 className="text-muted pb-3 nothingCall">Proficiencies</h2>
      <div className="row">
        <div className="col-md-4">
        <img src="https://santhisrikh.github.io/images/react.png" alt="" />
        <h3 className="text-muted">React App</h3>
        <p>React JS & Redux</p>
        </div>
        <div className="col-md-4">
        <img src="https://santhisrikh.github.io/images/data.png" alt="" />
        <h3 className="text-muted">Algo & Data Structures</h3>
        <p>Arrays,Stacks and Queues,Algorithms</p>
        </div>
        <div className="col-md-4 mt-2">
        <img src="https://santhisrikh.github.io/images/back.png" alt="" />
        <h3 className="text-muted">Backend</h3>
        <p>Python,Flask ,SQL</p>
        </div>
      </div>
    </div>
  );
};
export default Section1;
