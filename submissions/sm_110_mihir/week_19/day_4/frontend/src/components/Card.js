import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card m-2">
        <div className="card-header">{props.book_name}</div>
        <div className="card-body">
          <div className="card-title bg-dark text-white">Authors</div>
          <div className="card-text">{props.author}</div>
          <br />
          <div className="card-title bg-success">Category</div>
          <div className="card-text">{props.category}</div>
          <div className="card-footer">Publication: {props.publisher}</div>
        </div>
      </div>
    </div>
  );
}
