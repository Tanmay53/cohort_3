import React from "react";

const Buttons = ({ data }) =>
  data.map(elm => {
    return (
      <div className="col-6 p-1">
        <button
          key={elm}
          type="button"
          className="btn btn-block btn-outline-dark"
        >
          {elm}
        </button>
      </div>
    );
  });

export default Buttons;
