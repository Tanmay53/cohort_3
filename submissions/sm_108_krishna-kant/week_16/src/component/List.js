import React from "react";
import Table from "./Table";
import { Link } from "react-router-dom";

export default function List({
  total_pages,
  item_to_show,
  items,
  handleChange,
  changePage,
  match
}) {
  let pagination = [];
  for (let i = 1; i <= total_pages; i++) {
    pagination.push(
      <li key={i} className="page-item">
        <Link
          className="btn btn-outline-dark mx-2"
          value={i}
          to={`${match.url}?page=${i}&per_page=${item_to_show}`}
          onClick={() => changePage(i)}
        >
          {i}
        </Link>
      </li>
    );
  }
  return (
    <div className="col">
      <div className="row px-5 pt-4">
        <div className="col-4">
          <div className="form-group">
            <label className="float-left">Items per page</label>
            <select
              className="form-control"
              name="item_to_show"
              onChange={handleChange}
              value={item_to_show}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>

      <Table items={items}></Table>

      <div className="d-flex justify-content-center w-100">
        <div>
          <nav
            aria-label="Page navigation example"
            className="justify-content-center"
          >
            <ul className="pagination">{pagination}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
