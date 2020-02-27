import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loading">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
