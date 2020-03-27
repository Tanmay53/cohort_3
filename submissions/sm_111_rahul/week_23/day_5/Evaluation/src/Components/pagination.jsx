/** @format */

import React from "react";
import { connect } from "react-redux";
import { changePage } from "../Redux/Actions/Actions";

const Pagination = ({ page, totalPages, changePage }) => {
  const pageList = [];
  for (
    let i = page - 1;
    i >= 0 && i <= page + 3 && i <= Math.ceil(totalPages);
    i++
  ) {
    if (i === page - 1) {
      if (i !== 0)
        pageList.push(
          <li
            className="page-link"
            key={i}
            onClick={() => changePage(page - 1)}
          >
            Prev
          </li>
        );
      continue;
    }

    if (i === page + 3) {
      pageList.push(
        <li className="page-link" key={i} onClick={() => changePage(page + 1)}>
          Next
        </li>
      );
      continue;
    }
    
    pageList.push(
      <li key={i} className="page-link" onClick={() => changePage(i)}>
        {i}
      </li>
    );
  }
  return <>{totalPages !== 0 && <ul className="pagination">{pageList}</ul>}</>;
};

const mapStateToProps = state => ({
  page: state.albumReducer.page,
  perPage: state.albumReducer.perPage,
  totalPages: state.albumReducer.totalPages
});

const mapDispatchToProps = dispatch => ({
  changePage: payload => dispatch(changePage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
