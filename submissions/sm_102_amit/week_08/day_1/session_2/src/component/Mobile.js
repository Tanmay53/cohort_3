import React from "react";

const Mobile = ({ data }) =>
  data.map(obj => {
    return (
      <div className="col-6">
        <Display key={obj.heading} details={obj} />
      </div>
    );
  });

const Display = ({ details }) => (
  <div className="bg-light p-1">
    <h1 className="h6">{details.heading}</h1>
    <ol className="list-unstyled p-1">
      <li className="p-1" key={details.name[0]}>
        {details.name[0]}
      </li>
      <li className="p-1" key={details.name[1]}>
        {details.name[1]}
      </li>
      <li className="p-1" key={details.name[2]}>
        {details.name[2]}
      </li>
      <li className="p-1" key={details.name[3]}>
        {details.name[3]}
      </li>
    </ol>
  </div>
);

export default Mobile;
